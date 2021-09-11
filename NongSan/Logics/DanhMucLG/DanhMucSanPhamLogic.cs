using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NongSan.Models;

namespace NongSan.Logics.DanhMucLG
{
    public class DanhMucSanPhamLogic
    {
        public List<DanhMucSanPham> LoadAllDanhMuc()
        {
            List<DanhMucSanPham> list = new List<DanhMucSanPham>();
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                var listdanhmuc = db.DanhMucSanPham.ToList();
                foreach (var item in listdanhmuc)
                {
                    list.Add(item);
                }
            }
            return list;
        }
    }
}