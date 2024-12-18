
import Image from "next/image";
import "../../../public/assets/css/viewoder.css";

function Order() {
  return (
    <section className="order-page py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Xem đơn hàng
        </h2>
        <div className="flex flex-wrap">
          {/* Thay 'col-lg-8 col-12 px-4' bằng 'w-full lg:w-2/3 px-4' */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 border-b">Sản phẩm</th>
                    <th className="py-2 px-4 border-b">Tên sản phẩm</th>
                    <th className="py-2 px-4 border-b">Giá</th>
                    <th className="py-2 px-4 border-b">Số lượng</th>
                    <th className="py-2 px-4 border-b">Tổng phụ</th>
                    <th className="py-2 px-4 border-b">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 px-4 border-b">
                      <div className="flex items-center">
                        <Image
                        width={12}
                        height={12}
                          src="/assets/images/shapes/crack burgers -.jpg"
                          alt=""
                          className="w-12 h-12"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b">Nội tạng</td>
                    <td className="py-4 px-4 border-b">$15.00</td>
                    <td className="py-4 px-4 border-b">1</td>
                    <td className="py-4 px-4 border-b">$15.00</td>
                    <td className="py-4 px-4 border-b">Hoàn thành</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 border-b">
                      <div className="flex items-center">
                        <Image
                        width={12}
                        height={12}
                          src="/assets/images/shapes/crack burgers -.jpg"
                          alt=""
                          className="w-12 h-12"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b">Nội tạng</td>
                    <td className="py-4 px-4 border-b">$20.00</td>
                    <td className="py-4 px-4 border-b">2</td>
                    <td className="py-4 px-4 border-b">$40.00</td>
                    <td className="py-4 px-4 border-b">Đang chờ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 border-b">
                      <div className="flex items-center">
                        <Image
                        width={12}
                        height={12}
                          src="/assets/images/shapes/crack burgers -.jpg"
                          alt=""
                          className="w-12 h-12"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b">Nội tạng</td>
                    <td className="py-4 px-4 border-b">$25.00</td>
                    <td className="py-4 px-4 border-b">1</td>
                    <td className="py-4 px-4 border-b">$25.00</td>
                    <td className="py-4 px-4 border-b">Đã giao hàng</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 border-b">
                      <div className="flex items-center">
                        <Image
                        width={12}
                        height={12}
                          src="/assets/images/shapes/crack burgers -.jpg"
                          alt=""
                          className="w-12 h-12"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b">Nội tạng</td>
                    <td className="py-4 px-4 border-b">$30.00</td>
                    <td className="py-4 px-4 border-b">3</td>
                    <td className="py-4 px-4 border-b">$90.00</td>
                    <td className="py-4 px-4 border-b">Đã hủy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <h5 className="text-lg font-semibold">Tóm tắt đơn hàng:</h5>
              <ul className="bg-white border border-gray-300 rounded-lg">
                <li className="flex justify-between py-2 px-4 border-b">
                  Tổng phụ
                  <span>$170.00</span>
                </li>
                <li className="flex justify-between py-2 px-4 border-b">
                  Phí vận chuyển
                  <span>$10.00</span>
                </li>
                <li className="flex justify-between py-2 px-4">
                  <h4 className="font-bold">Tổng cộng</h4>
                  <span>$180.00</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Customer Information */}
          <div className="w-full lg:w-1/3 px-4">
            <div className="bg-white shadow-md rounded-lg mb-4">
              <div className="p-4">
                <h5 className="font-semibold">Thông tin khách hàng</h5>
                <address className="mt-2">
                  John Doe
                  <br />
                  2801 Lafayette Blvd, Norfolk, Vermont 23509, Hoa Kỳ
                  <br />
                  Email: johndoe@example.com
                  <br />
                  Điện thoại: (123) 456-7890
                </address>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg">
              <div className="p-4">
                <h5 className="font-semibold">Địa chỉ giao hàng</h5>
                <address className="mt-2">
                  2801 Lafayette Blvd, Norfolk, Vermont 23509, Hoa Kỳ
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
