using NongSan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace NongSan.Areas.Admin.Controllers
{
    public class AccountController : Controller
    {
        private BanNongSanEntities db = new BanNongSanEntities();

        // GET: Admin/Login
        public ActionResult Login()
        {
            return View();
        }

        //Mã hóa MD5
        public static string GetMD5(string str)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] fromData = Encoding.UTF8.GetBytes(str);
            byte[] targetData = md5.ComputeHash(fromData);
            string byte2String = null;

            for (int i = 0; i < targetData.Length; i++)
            {
                byte2String += targetData[i].ToString("x2");
            }
            return byte2String;
        }

        //Xử lý Login
        [HttpPost]
        public ActionResult Login(string username, string password)
        {
            if (ModelState.IsValid)
            {
                var f_password = GetMD5(password);

                var data = db.TaiKhoan.Where(s => s.UserName.Equals(username) && s.Password.Equals(f_password)).ToList();

                if (data.Count() == 1)
                {
                    //add session
                    Session["Name"] = data.FirstOrDefault().Name;
                    Session["Email"] = data.FirstOrDefault().Gmail;
                    Session["User"] = data.FirstOrDefault().UserName;
                    return RedirectToAction("Index", "HomeAdmin");
                }
                else
                {
                    //ViewBag.error = "Login failed";
                    TempData["msg"] = " Username or Password is wrong !";
                    return RedirectToAction("Login");
                }
            }
            return View();
        }

        //Xử lý Logout
        public ActionResult Logout()
        {
            Session.Clear();//remove session
            return RedirectToAction("Login");
        }
    }
}