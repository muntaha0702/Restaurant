const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
const food = [
    {
        id:1,
        location:"chandigarh",
        cuisine:"chicken",
        image:"https://www.bitesbee.com/wp-content/uploads/2021/09/banner-4.jpg"
    },
    {
        id:2,
        location:"delhi",
        cuisine:"chicken",
        image:"https://www.bakingo.com/blog/wp-content/uploads/2021/12/famous-foods-of-delhi.jpg"
    },
    {
    id:3,
    location:"allahabad",
    cuisine:"chicken",
    image:"https://www.masalabox.com/wp-content/uploads/2022/03/Unidd-design-11-1020x630-1.png"
    },
    {
        id:4,
        location:"jamshedpur",
        cuisine:"chicken",
        image:"https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2017/08/jharkhand-food-e1507467932347.jpg?fit=675%2C386&ssl=1"
    },
    {
        id:5,
        location:"patna",
        cuisine:"chicken",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:6,
        location:"Goa",
        cuisine:" chicken",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:7,
        location:"Andhra Pradesh",
        cuisine:" chicken",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:8,
        location:"Tamil Nadu",
        cuisine:" chicken",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:9,
        location:"Kashmir",
        cuisine:"chicken",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:10,
        location:"chandigarh",
        cuisine:"chinese",
        image:"https://www.bitesbee.com/wp-content/uploads/2021/09/banner-4.jpg"
    },
    {
        id:11,
        location:"delhi",
        cuisine:"chinese",
        image:"https://www.bakingo.com/blog/wp-content/uploads/2021/12/famous-foods-of-delhi.jpg"
    },
    {
    id:12,
    location:"allahabad",
    cuisine:"chinese",
    image:"https://www.masalabox.com/wp-content/uploads/2022/03/Unidd-design-11-1020x630-1.png"
    },
    {
        id:13,
        location:"jamshedpur",
        cuisine:"chinese",
        image:"https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2017/08/jharkhand-food-e1507467932347.jpg?fit=675%2C386&ssl=1"
    },
    {
        id:14,
        location:"patna",
        cuisine:"chinese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:15,
        location:"Goa",
        cuisine:"chinese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:16,
        location:"Andhra Pradesh",
        cuisine:"chinese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:17,
        location:"Tamil Nadu",
        cuisine:"chinese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:18,
        location:"Kashmir",
        cuisine:"chinese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:19,
        location:"chandigarh",
        cuisine:"italian",
        image:"https://www.bitesbee.com/wp-content/uploads/2021/09/banner-4.jpg"
    },
    {
        id:20,
        location:"delhi",
        cuisine:"italian",
        image:"https://www.bakingo.com/blog/wp-content/uploads/2021/12/famous-foods-of-delhi.jpg"
    },
    {
    id:21,
    location:"allahabad",
    cuisine:"italian",
    image:"https://www.masalabox.com/wp-content/uploads/2022/03/Unidd-design-11-1020x630-1.png"
    },
    {
        id:22,
        location:"jamshedpur",
        cuisine:"italian",
        image:"https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2017/08/jharkhand-food-e1507467932347.jpg?fit=675%2C386&ssl=1"
    },
    {
        id:23,
        location:"patna",
        cuisine:"italian",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:24,
        location:"Goa",
        cuisine:"italian",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:25,
        location:"Andhra Pradesh",
        cuisine:"italian",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:26,
        location:"Tamil Nadu",
        cuisine:"italian",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:27,
        location:"Kashmir",
        cuisine:"italian",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:28,
        location:"chandigarh",
        cuisine:"japanese",
        image:"https://www.bitesbee.com/wp-content/uploads/2021/09/banner-4.jpg"
    },
    {
        id:29,
        location:"delhi",
        cuisine:"japanese",
        image:"https://www.bakingo.com/blog/wp-content/uploads/2021/12/famous-foods-of-delhi.jpg"
    },
    {
    id:30,
    location:"allahabad",
    cuisine:"japanese",
    image:"https://www.masalabox.com/wp-content/uploads/2022/03/Unidd-design-11-1020x630-1.png"
    },
    {
        id:31,
        location:"jamshedpur",
        cuisine:"japanese",
        image:"https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2017/08/jharkhand-food-e1507467932347.jpg?fit=675%2C386&ssl=1"
    },
    {
        id:32,
        location:"patna",
        cuisine:"japanese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:33,
        location:"Goa",
        cuisine:"japanese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:34,
        location:"Andhra Pradesh",
        cuisine:" japanese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:35,
        location:"Tamil Nadu",
        cuisine:" japanese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:36,
        location:"Kashmir",
        cuisine:"japanese",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:37,
        location:"chandigarh",
        cuisine:"buger",
        image:"https://www.bitesbee.com/wp-content/uploads/2021/09/banner-4.jpg"
    },
    {
        id:38,
        location:"delhi",
        cuisine:"buger",
        image:"https://www.bakingo.com/blog/wp-content/uploads/2021/12/famous-foods-of-delhi.jpg"
    },
    {
    id:39,
    location:"allahabad",
    cuisine:"buger",
    image:"https://www.masalabox.com/wp-content/uploads/2022/03/Unidd-design-11-1020x630-1.png"
    },
    {
        id:40,
        location:"jamshedpur",
        cuisine:"buger",
        image:"https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2017/08/jharkhand-food-e1507467932347.jpg?fit=675%2C386&ssl=1"
    },
    {
        id:41,
        location:"patna",
        cuisine:"buger",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:42,
        location:"Goa",
        cuisine:" buger",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:43,
        location:"Andhra Pradesh",
        cuisine:"buger",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:44,
        location:"Tamil Nadu",
        cuisine:"buger",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:45,
        location:"Kashmir",
        cuisine:"buger",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:46,
        location:"chandigarh",
        cuisine:"american",
        image:"https://www.bitesbee.com/wp-content/uploads/2021/09/banner-4.jpg"
    },
    {
        id:47,
        location:"delhi",
        cuisine:"american",
        image:"https://www.bakingo.com/blog/wp-content/uploads/2021/12/famous-foods-of-delhi.jpg"
    },
    {
    id:48,
    location:"allahabad",
    cuisine:"american",
    image:"https://www.masalabox.com/wp-content/uploads/2022/03/Unidd-design-11-1020x630-1.png"
    },
    {
        id:49,
        location:"jamshedpur",
        cuisine:"american",
        image:"https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2017/08/jharkhand-food-e1507467932347.jpg?fit=675%2C386&ssl=1"
    },
    {
        id:50,
        location:"patna",
        cuisine:"american",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:51,
        location:"Goa",
        cuisine:" american",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:52,
        location:"Andhra Pradesh",
        cuisine:" american",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:53,
        location:"Tamil Nadu",
        cuisine:" american",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    {
        id:54,
        location:"Kashmir",
        cuisine:"american",
        image:"https://images.slurrp.com/prod/articles/s33zz5opfx.webp"
    },
    
]
app.get("/food", (req, res) => {
    const { query } = req.query;
    let filteredFood = [];
  
    if (query) {
      filteredFood = food.filter(
        (item) =>
          item.cuisine.toLowerCase().includes(query.toLowerCase()) ||
          item.location.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      // If no query provided, return all food items
      filteredFood = food;
    }
  
    if (filteredFood.length > 0) {
      res.json(filteredFood);
    } else {
      res.status(404).json({ message: "No food items found matching the query" });
    }
  });
  
  app.listen(3005, () => {
    console.log("Server is running on port 3005");
  });
  