using System;
using System.Collections.Generic;
using System.Text;

namespace WebAppTest.Models
{
    public class Student
    {
        public long StudentID { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string Address { get; set; }
    }
}
