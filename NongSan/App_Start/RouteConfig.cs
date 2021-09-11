using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace NongSan
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapRoute(
                name: "Product detail",
                url: "chi-tiet-san-pham-{idpro}",
                defaults: new { controller = "SanPham", action = "ChiTietSanPham", id = UrlParameter.Optional },
                namespaces: new[] { "NongSan.Controllers" }
            );
            routes.MapRoute(
                name: "Shop",
                url: "shop",
                defaults: new { controller = "SanPham", action = "ShopIndex", id = UrlParameter.Optional },
                namespaces: new[] { "NongSan.Controllers" }
            );
            routes.MapRoute(
                name: "Product by Category",
                url: "san-pham-danh-muc-{id}",
                defaults: new { controller = "SanPham", action = "SanPhamTheoDanhMuc", id = UrlParameter.Optional },
                namespaces: new[] { "NongSan.Controllers" }
            );

            routes.MapRoute(
               name: "About",
               url: "gioi-thieu",
               defaults: new { controller = "Home", action = "About", id = UrlParameter.Optional },
               namespaces: new[] { "NongSan.Controllers" }
            );
            routes.MapRoute(
               name: "Contact",
               url: "lien-he",
               defaults: new { controller = "Home", action = "Contact", id = UrlParameter.Optional },
               namespaces: new[] { "NongSan.Controllers" }
            );
            routes.MapRoute(
                name: "Cart",
                url: "gio-hang",
                defaults: new { controller = "Cart", action = "CartIndex", id = UrlParameter.Optional },
                namespaces: new[] { "NongSan.Controllers" }
            );
            //routes.MapRoute(
            //    name: "Login",
            //    url: "log-in",
            //    defaults: new { controller = "Login", action = "Login", id = UrlParameter.Optional },
            //    namespaces: new[] { "NongSan.Controllers" }
            //);
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}