"use client";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import firebase from "./firebase";
import { useRouter } from "next/navigation";

// Extend window object
declare global {
  interface Window {
    recaptchaVerifier?: firebase.auth.RecaptchaVerifier;
    confirmationResult?: firebase.auth.ConfirmationResult;
  }
}

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  // Initialize reCAPTCHA verifier
  const initializeRecaptcha = useCallback(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("sign-in-button", {
        size: "invisible",
        defaultCountry: "VN",
      });
    }
  }, []);

  const handleSendOTP = async () => {
    try {
      initializeRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier!);
      window.confirmationResult = confirmationResult;
      alert("OTP has been sent");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert(error.message);
    }
  };

  const handleVerify = async () => {
    try {
      if (!window.confirmationResult) {
        throw new Error("No confirmation result available. Please send OTP again.");
      }
      await window.confirmationResult.confirm(otp);
      alert("Verification successful");

      // Check if accessToken exists in localStorage
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("User is not logged in");
        router.push("/page/login");
        return;
      }

      setVerificationSuccess(true);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert(error.message);
    }
  };

  const handleChangePassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("User is not logged in");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/users/update-password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          newPassword: password,
          confirmPassword: confirmPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Password updated successfully");
        router.push("/page/login");
      } else {
        alert(data.message || "Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      alert("An error occurred while updating the password");
    }
  };

  useEffect(() => {
    initializeRecaptcha();
  }, [initializeRecaptcha]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Phone Verification</h1>
        {!verificationSuccess ? (
          <>
            <TextField
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              margin="normal"
              className="mb-4"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendOTP}
              className="w-full mb-4"
            >
              Send OTP
            </Button>
            <TextField
              label="OTP"
              variant="outlined"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              fullWidth
              margin="normal"
              className="mb-4"
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleVerify}
              className="w-full"
            >
              Verify OTP
            </Button>
          </>
        ) : (
          <>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              className="mb-4"
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              margin="normal"
              className="mb-4"
            />
            <Button
              variant="contained"
              color="primary"
              className="w-full"
              onClick={handleChangePassword}
            >
              Set Password
            </Button>
          </>
        )}
        <div id="sign-in-button" className="mt-4"></div>
      </div>
    </div>
  );
}