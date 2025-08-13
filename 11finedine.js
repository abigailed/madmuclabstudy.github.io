


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 5,
      "reviewTitle": "Extremely durable and amazing customer service!",
      "reviewDescription": "Best insulated bottle I have ever purchased! I purchased this bottle a year ago and have been using it pretty much every day since. I absolutely love the colour of it, and it comes with 3 different lids including one with a straw, one with a carabeener for your backpack, and a coffee style one. This keeps my water cool for 24 hours minimum - more so if I add a few cubes of ice. It's not the lightest bottle, but it fits in all the gym cupholders and is super portable. Very recently, the silicone part came off the straw lid and I couldn't find it. The bottle was still in working order, however without the silicone mouth piece it was kinda uncomfortable to drink from and also a spill risk. I was super gutted about it! Although it was a year since I purchased it, I reached out to the customer service through the Amazon messaging feature, and asked could I purchased the silicone mouth piece. They were so prompt and helpful and actually sent me out a replacement bottle instead! I'm delighted as I now have a second one of these amazing bottles that I can use for hiking and the outdoors - I just use one of the other lids provided for it! 10/10 for the bottle and customer service!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Good Product For Hot Summer Days",
      "reviewDescription": "The FineDine Water Bottle is a versatile and stylish choice for anyone looking to keep their beverages at the perfect temperature throughout the day. Made from high-quality stainless steel and featuring a triple-lid design, this water bottle is built to cater to various hydration needs. Design and Build Quality The stainless steel construction of the FineDine Water Bottle exudes durability and elegance. It resists dents and retains its sleek appearance even after rough use. The bottle is available in multiple colors, allowing users to choose one that best fits their style. The wide-mouth cap makes it easy to clean and fill, and the overall design is both ergonomic and visually appealing. Insulation Performance One of the standout features of the FineDine Water Bottle is its superior insulation. It keeps cold drinks chilled for up to 24 hours and hot beverages warm for up to 12 hours. Whether you’re heading out for a summer hike or commuting to work on a chilly morning, this bottle ensures your drink stays at the desired temperature. Lid Versatility The inclusion of three different lids—straw lid, flip lid, and wide-mouth cap—adds remarkable versatility. The straw lid is perfect for easy sipping during workouts, the flip lid is convenient for quick drinks on the go, and the wide-mouth cap is ideal for those who prefer to gulp down their beverages or add ice cubes easily. This range of options makes the FineDine Water Bottle suitable for a variety of activities and preferences."
    }]





  // CONTROLS FOR HOW THE DATA LOOKS AND SUCH

  let output = "";
 
  let name = ["Eliza Duke", "Jaden Harvey" , "Arron Kent","Ivy Kirk" , "Huda Nolan" , "Mia Lee" , "Mohammad Roberson" ,"Alexandria Maxwell" , "Issac Pearce", "Yasmin Wang"]
  let i = 0;
  jsonData.forEach(item => {
    let ratingValue = item.ratingScore*20;
    output += `
        <div class="review">
         
         <h3> <p> ${name[i]}</p> <br>
         <div class="ratings">
            <div class="ratings-val" style="width: ${(ratingValue)}% ;"></div><!-- End .ratings-val -->
          </div><!-- End .ratings -->   ${item.reviewTitle}</h3>
          <p id="reviewdes">${item.reviewDescription}</p>
        </div>
      `;
      i++;
    });
    
    document.getElementById("outputerr").innerHTML = output;

   
    

    const clickText1 = document.getElementById("pro1");
    const clickText2 = document.getElementById("pro2");
    const clickText3 = document.getElementById("pro3");
    const clickText4 = document.getElementById("con1");
    const clickText5 = document.getElementById("con2");
    const clickText6 = document.getElementById("con3");
   
      
      function highlight_review_one() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("durable")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_two() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("chilled")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_three() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("lids")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_four() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("bottle")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_five() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("year")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

    

      function highlight_review_six() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }
     
      clickText1.addEventListener('click', highlight_review_one);
      clickText2.addEventListener('click', highlight_review_two);
      clickText3.addEventListener('click', highlight_review_three);
      clickText4.addEventListener('click', highlight_review_four);
      clickText5.addEventListener('click', highlight_review_five);
      clickText6.addEventListener('click', highlight_review_six);


//end of what was working!!



                                                                                                                                                                                                                                                      
//TESTING OPEN AI

// async function analyzeReviews() {
//   const reviewText = reviews.map(r => r.reviewDescription).join("\n");

//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "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"
//     },
//     body: JSON.stringify({
//       model: "gpt-4.1",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant that extracts pros and cons from Amazon product reviews."
//         },
//         {
//           role: "user",
//           content: `Here are some reviews:\n${reviewText}`
//         }
//       ],
//       functions: [
//         {
//           name: "generate_pros_and_cons",
//           description: "Extracts pros and cons from a list of product reviews.",
//           parameters: {
//             type: "object",
//             properties: {
//               pros: {
//                 type: "array",
//                 items: { type: "string" }
//               },
//               cons: {
//                 type: "array",
//                 items: { type: "string" }
//               }
//             },
//             required: ["pros", "cons"]
//           }
//         }
//       ],
//       function_call: { name: "generate_pros_and_cons" }
//     })
//   });

//   const data = await response.json();

//   const result = JSON.parse(data.choices[0].message.function_call.arguments);

//   document.getElementById("results").innerHTML = `
//         <h2>Pros</h2>
//         <ul>${result.pros.map(p => `<li>${p}</li>`).join("")}</ul>
//         <h2>Cons</h2>
//         <ul>${result.cons.map(c => `<li>${c}</li>`).join("")}</ul>
//       `;

// }

// document.getElementById("analyze").addEventListener("click", analyzeReviews);








}) 







  