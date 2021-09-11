using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NongSan.Models;

namespace NongSan.Logics.SanPhamLG
{
    public class SanPhamLogic
    {
        public List<SanPham> LoadAllSanPham()
        {
            List<SanPham> list = new List<SanPham>();
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                var listsanpham = db.SanPham.Include("DanhMucSanPham").ToList();
                foreach (var item in listsanpham)
                {
                    list.Add(item);
                }
            }
            return list;
        }
        public List<SanPham> LoadAllSanPham2()
        {
            List<SanPham> list = new List<SanPham>();
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                var listsanpham = db.SanPham.ToList();
                foreach (var item in listsanpham)
                {
                    list.Add(item);
                }
            }
            return list;
        }

        public List<SanPham> ListBestSeller(int top)
        {
            List<SanPham> list = new List<SanPham>();
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                //var listsanpham = db.SanPham.Include("DanhMucSanPham").Take(top).ToList();

                var listsanpham = (from sp in db.SanPham
                                   let tongSl = (from cthd in db.ChitTietDonHang
                                                 where cthd.IDSanPham == sp.IDSanPham
                                                 select (cthd.SoLuong)
                                                 ).Sum()
                                   where tongSl > 0
                                   orderby tongSl descending
                                   select sp).Take(top);

                foreach (var item in listsanpham)
                {
                    list.Add(item);
                }
            }
            return list;
        }

        public List<SanPham> ListNewProduct(int top)
        {
            List<SanPham> list = new List<SanPham>();
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                var listsanpham = db.SanPham.OrderByDescending(x => x.IDSanPham).Take(top).ToList();

                foreach (var item in listsanpham)
                {
                    list.Add(item);
                }
            }
            return list;
        }

        public List<SanPham> ListFeateredProduct(int top)
        {
            List<SanPham> list = new List<SanPham>();
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                var listsanpham = db.SanPham.Where(x => x.GiaKhuyenMai < x.DonGia).OrderByDescending(x => x.DonGia - x.GiaKhuyenMai).Take(top).ToList();

                foreach (var item in listsanpham)
                {
                    list.Add(item);
                }
            }
            return list;
        }

        public SanPham ProductDetail(long idproduct)
        {
            SanPham sanphamchitiet = new SanPham();

            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                sanphamchitiet = db.SanPham.Find(idproduct);
            }
            return sanphamchitiet;
        }

        public List<SanPham> ListRelatedProduct(long idproduct)
        {
            SanPham product = new SanPham();
            List<SanPham> listsanphamlienquan = new List<SanPham>();
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                product = db.SanPham.Find(idproduct);
                listsanphamlienquan = db.SanPham.Where(x => x.IDSanPham != idproduct && x.IDDanhMuc == product.IDDanhMuc).ToList();
            }
            return listsanphamlienquan;
        }

        public List<SanPham> ListSanPhamTheoDanhMuc(long? iddanhmuc)
        {
            List<SanPham> listsanphamtheodanhmuc = new List<SanPham>();
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                listsanphamtheodanhmuc = db.SanPham.Where(x => x.IDDanhMuc == iddanhmuc).ToList();
            }
            return listsanphamtheodanhmuc;
        }
    }
}