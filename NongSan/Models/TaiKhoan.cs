//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace NongSan.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class TaiKhoan
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Gmail { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string IDQuyen { get; set; }
    
        public virtual PhanQuyen PhanQuyen { get; set; }
    }
}
