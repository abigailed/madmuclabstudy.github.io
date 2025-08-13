


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 4,
      "reviewTitle": "An Okay Bottle",
      "reviewDescription": "This water bottle does a decent job at keeping drinks at the right temperature and has a stylish appearance, especially in the oat/yellow color. It’s great for drinking water, and the straw feels pretty standard—nothing too special, but it gets the job done. However, there are a few problems. The chug cap is a bit difficult to twist on and off, which can be inconvenient. Additionally, there’s a slight metallic or rubber-like taste that can be noticeable while drinking. When it comes to hot drinks like cappuccinos or tea, I wouldn’t say this is the best option. If you do use it for hot liquids, be sure to leave the lid open for a few minutes after pouring. Otherwise, the heat buildup can cause the drink to spill out when you open the straw. Overall, it’s a decent thermal bottle—not amazing, but not bad either. If you’re mainly using it for water, it should work just fine."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Very Good",
      "reviewDescription": "Amazing bottle. Love that it can have the option to drink from spout or sip straw without having to change lid. Good quality and keeps drinks cold. Good size. I would recommend."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Good solid bottle",
      "reviewDescription": "Good solid quality. Does keep content cold for atleast 6 hours."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "it does keep my liquid cold for a long time",
      "reviewDescription": "i just found it too big for my use"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Good buy, great product.",
      "reviewDescription": "Impressive. Still lots of ice in the bottom after 24 hours. Water stays nice and cold. I haven’t tried anything hot as I just got it for water. I would recommend getting one."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "BIFL - 2 in 1 is the best",
      "reviewDescription": "Forget Stanley, POWCAN has life time warranty and fantastic customer service. I asked questions and they responded right away with answers. The straw is great for no distraction while driving, and the chug for any other times. I got a second one, just know the 26oz fits cup holders."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Excellent leak proof water bottle",
      "reviewDescription": "I've been looking for a bottle that can carry a lot of water, but still be light enough to carry around. This 40oz bottle is perfect! I also prefer this handle because it's easier on the wrists when carrying compared to the side handle. The cotton candy colour is exactly as advertised. Love it! My sister also bought one and loves it too!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Awesome water bottle",
      "reviewDescription": "Very durable and cute! It’s kept ice cold for over 12 hours, and I love that it has both a straw and spout. I use it daily and would definitely recommend!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Sturdy, great size",
      "reviewDescription": "I've dinged this bottle around a few times and the colour hasn't chipped or scratch. Well-designed, fits in your cup holder but holds a good amount of water. The \"handle\" makes it easier to tote around, and the spout is shaped in an ergonomic way for optimal pouring into one's mouth. I don't use the straw very often, but seems to do what it's supposed to do. Quality water bottle at a decent price!"
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
          if (el.innerText.includes("chugging")) {
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
          if (el.innerText.includes("cold")) {
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
          if (el.innerText.includes("twist")) {
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
          if (el.innerText.includes("drinking")) {
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
          if (el.innerText.includes("heat")) {
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







  