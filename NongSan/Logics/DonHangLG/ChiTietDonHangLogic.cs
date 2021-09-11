using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NongSan.Models;

namespace NongSan.Logics.DonHangLG
{
    public class ChiTietDonHangLogic
    {
        public bool Insert(ChitTietDonHang detail)
        {
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                try
                {
                    db.ChitTietDonHang.Add(detail);
                    db.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }
    }
}