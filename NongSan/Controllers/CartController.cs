using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NongSan.Logics.SanPhamLG;
using NongSan.Logics.DonHangLG;
using NongSan.Logics.DanhMucLG;
using NongSan.ViewModels;
using NongSan.Models;

namespace NongSan.Controllers
{
    public class CartController : Controller
    {
        // GET: Cart
        public ActionResult CartIndex()
        {
            var cart = Session["order"];
            if (cart == null)
            {
                return View();
            }
            else
            {
                return View(cart);
            }
        }

        public PartialViewResult MiniCartHeader()
        {
            var cart = Session["order"];
            var list = new List<ItemCartViewModel>();
            if (cart != null)
            {
                list = (List<ItemCartViewModel>)cart;
            }
            return PartialView(list);
        }

        public ActionResult AddToCart(int idpro, int quantity)
        {
            var cart = Session["order"];
            var product = new SanPhamLogic().ProductDetail(idpro);
            //var pro = cartvm.ListItem.FirstOrDefault(x => x.IdProduct == idPro);
            if (cart != null)
            {
                var list = (List<ItemCartViewModel>)cart;
                //Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
                if (list.Exists(x => x.sanpham.IDSanPham == idpro))
                {
                    list.Count();
                    foreach (var item in list)
                    {
                        if (item.sanpham.IDSanPham == idpro)
                        {
                            //sản phẩm đã tồn tại trong giỏ hàng và cùng trọng lượng
                            item.SoLuong += quantity;
                        }
                    }
                }
                else
                {
                    //sản phẩm chưa tồn tại trong giỏ hàng
                    var item = new ItemCartViewModel();
                    item.sanpham = product;
                    item.SoLuong = quantity;
                    item.TrongLuong = 500;
                    item.Gia = item.sanpham.GiaKhuyenMai;
                    list.Add(item);
                }
                //Gán vào session
                Session["order"] = list;
            }
            else
            {
                //tạo mới đối tượng cart item - CHƯA CÓ GIỎ HÀNG
                var item = new ItemCartViewModel();
                item.sanpham = product;
                item.SoLuong = quantity;
                item.Gia = item.sanpham.GiaKhuyenMai;

                var list = new List<ItemCartViewModel>();
                list.Add(item);
                Session["order"] = list;
            }
            var cart2 = Session["order"];
            var list2 = (List<ItemCartViewModel>)cart2;
            if (list2 != null)
            {
                //return Content(list2.Count.ToString());
                return Json(list2.Count.ToString(), JsonRequestBehavior.AllowGet);
            }
            else
            {
                //return Content("0");
                return Json(list2.Count.ToString(), JsonRequestBehavior.AllowGet);
            }
            //return Json(new { Message = "Thành công", JsonRequestBehavior.AllowGet });
            //return RedirectToAction("MiniCartHeader");
        }

        public ActionResult UpdateCart(int idpro, int quantity)
        {
            string result = "Fail";
            if (quantity != 0)
            {
                var cart = Session["order"];

                if (cart != null)
                {
                    var list = (List<ItemCartViewModel>)cart;
                    //Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
                    if (list.Exists(x => x.sanpham.IDSanPham == idpro))
                    {
                        foreach (var item in list)
                        {
                            if (item.sanpham.IDSanPham == idpro)
                            {
                                item.SoLuong = quantity;
                                item.Gia = item.Gia;
                            }
                        }
                    }

                    Session["order"] = cart;
                    //return Content(cartvm.ListItem.Count.ToString());
                    result = "Success";
                }
            }
            else
            {
                var sessionCart = (List<ItemCartViewModel>)Session["order"];
                sessionCart.RemoveAll(x => x.sanpham.IDSanPham == idpro);
                Session["order"] = sessionCart;
                result = "reload";
            }

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //change quantity product=>changecart
        public PartialViewResult Cart_ChangeAmountProduct()
        {
            var cart = Session["order"];
            var list = new List<ItemCartViewModel>();
            if (cart != null)
            {
                list = (List<ItemCartViewModel>)cart;
            }
            return PartialView(list);
        }

        //Thành tiền của từng mặt hàng
        public ActionResult SubTotal()
        {
            var cart = Session["order"];
            var list = (List<ItemCartViewModel>)cart;

            int result = 0;

            foreach (var item in list)
            {
                result = result + (item.SoLuong * item.Gia);
            }

            return Content(result.ToString());
        }

        //Tổng tiền cả hóa đơn
        public ActionResult Total_Coupon(int? coupon)
        {
            var cart = Session["order"];
            var list = (List<ItemCartViewModel>)cart;
            int total = 0;
            if (coupon == null)
            {
                foreach (var item in list)
                {
                    total = total + (item.SoLuong * item.Gia);
                }
            }
            else
            {
                foreach (var item in list)
                {
                    total = total + (item.SoLuong * item.Gia);
                }
                total = (int)(total - total * 0.1);
            }

            return Content(total.ToString());
        }

        public JsonResult DeleteOneProductInCart(int idproduct)
        {
            string result = "ok";
            var sessionCart = (List<ItemCartViewModel>)Session["order"];
            sessionCart.RemoveAll(x => x.sanpham.IDSanPham == idproduct);
            Session["order"] = sessionCart;
            if (sessionCart.Count() == 0)
            {
                result = "reload";
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        ////////--------------Checkout----------///////////
        [HttpGet]
        public ActionResult CheckOut()
        {
            var cart = Session["order"];
            if (cart == null)
            {
                return View();
            }
            else
            {
                return View(cart);
            }
        }

        [HttpPost]
        public ActionResult CheckOut(string name, string address, string email, string phone, string payment, string order_note)
        {
            var cart = (List<ItemCartViewModel>)Session["order"];
            var order = new DonHang();
            order.ShipTenNguoiDat = name;
            order.ShipDiaChi = address;
            order.ShipEmail = email;
            order.ShipSoDienThoai = phone;
            order.HinhThucThanhToan = payment;
            order.ShipGhiChu = order_note;
            order.TrangThaiDonHang = "Chờ xác nhận";
            order.TongTien = cart.Sum(x => Convert.ToInt64(x.sanpham.GiaKhuyenMai) * x.SoLuong);

            try
            {
                var id = new DonHangLogic().Insert(order); //Thêm đơn hàng - Lấy id đơn hàng mới thêm vào

                var detailDao = new ChiTietDonHangLogic();
                foreach (var item in cart)
                {
                    var orderDetail = new ChitTietDonHang();
                    orderDetail.IDSanPham = item.sanpham.IDSanPham;
                    orderDetail.IDDonHang = id;
                    orderDetail.SoLuong = item.SoLuong;

                    detailDao.Insert(orderDetail);//Lưu chi tiết đơn hàng
                }
            }
            catch (Exception ex)
            {
                //return Redirect("/bao-tri");
                return Content("THẤT BẠI");
            }
            //Hủy giỏ hàng
            Session["order"] = null;
            return Redirect("/");
        }
    }
}