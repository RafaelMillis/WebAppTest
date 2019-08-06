using System;
using System.Collections.Generic;
using System.Text;
using WebAppTest.Models;
using System.Linq;

namespace WebAppTest.DAL
{
    public class Dal
    {
        public IEnumerable<Student> GetStudents()
        {
            IEnumerable<Student> list = new List<Student>();
            using (DatadbContext ctx = new DatadbContext())
            {
                list = ctx.Students.ToList();
            }

            return list;
        }
    }


}
