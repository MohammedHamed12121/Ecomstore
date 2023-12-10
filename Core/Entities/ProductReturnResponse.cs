using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class ProductReturnResponse
    {
        
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public Product Data { get; set; }

    }
}