


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 5,
      "reviewTitle": "Nalgene Sustain Tritan BPA-Free Water Bottle: A Sustainable Choice!",
      "reviewDescription": "This Nalgene Sustain Tritan BPA-Free Water Bottle is a game-changer for anyone looking for a sustainable and high-quality water bottle. The fact that it's made with 50% recycled plastic waste is a huge plus, and it doesn't compromise on durability or performance. The 32oz capacity is perfect for staying hydrated throughout the day, and the narrow mouth makes it easy to drink from and clean. The Tritan material is BPA-free and doesn't impart any taste or odor to my water, which is important to me. I've been using this bottle for a while now, and it's held up perfectly. It's leak-proof, easy to clean, and I love the sleek design. I highly recommend this bottle to anyone looking for a sustainable and high-quality water bottle."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Indestructible!",
      "reviewDescription": "No matter the bottle trends, I always come back, to my tried, tested at true: the Nalgene bottle, with a narrow spout. It sustains the dishwasher, being left to freeze solid in my car during cold Canadian winters, attacks of dog, and constant drops and falls. It's light weight, indestructible and does what it needs to do: hold water. The handy loop makes it easy to clip onto something with a carabiner, so you can always have it on the go. It's solid construction also allows for a great self defence tool: ask the poor guy who startled me late one night while he was out for a jog, and I was walking home. He got absolutely bodied by my bottle, as I screamed and instinctually swung it at him, like my life depended on it, upon being spooked. He survived and will learn to wear a bell while jogging next time, for fear of encountering another scaredy cat white lady, armed with her nalgene bottle! The only thing it doesn't ever seem to survive, is my propensity to leave it behind, but that's an operator issue, and not reflective in any way of product quality or design. Thankfully they're reasonably priced, so buying replacements, won't break the bank! The Nalgene bottle is my Stanley. Y'all can duke it out at Target for the latest colour. I will forever be a pink Nalgene girly. With the narrow spout. I'm not sure what they were thinking, when they made the wide spout. Avoid at all costs, unless winning a wet t-shirt contest is your goal, in which case, there's a nalgene bottle for you too!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Indestructible bottle for gym hydration - stylish too",
      "reviewDescription": "I take my Nalgene to the gym regularly. I'm a fan of their products because they are practical and hold up. If you want a bigger flow of water during intense sessions, this offers it as it has a bigger opening. These bottles can be cleaned without too much fuss. Just force a sponge and soap inside and move it around with a long stir stick, and then pull it back out. You can also zap it in the micro for a few seconds to kill off anything else you think is lurking in there. Overall, it's a solid bottle."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Perfect Everyday Water Bottle",
      "reviewDescription": "Just got my new Nalgene 32oz water bottle and I love it! It’s super durable, lightweight, and easy to carry around. Perfect size for staying hydrated throughout the day. Definitely a great buy!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "The all around take anywhere water bottle",
      "reviewDescription": "Love my Nalgene bottles, they are always super durable and leakproof, and this one did not disappoint! I did however find the found the top to be a little wide on the old style, bought an insert to make it easier to drink from . So when I seen this bottle for sale I had to give it a shot. Love the smaller opening, with the same toughness as the original. Bottle can't be beat!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Nalgene",
      "reviewDescription": "It is what it is. This is what all the competitors try to strive to be. Its a Nalgene. Doesnt leak. Strong durable. Survives almost everything you throw at it."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Big water bottle, Great purchase!!",
      "reviewDescription": "I saw how someone left a review saying how easy it is to get more water intake during the day after using this water bottle and oh boy are they right! It’s a big water bottle but it doesn’t feel like you’re trying to up your water intake at all, I love the colours so I truly enjoy using this water bottle. I’m more hydrated than ever! 😊"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Loves it",
      "reviewDescription": "This water bottle is really light and definitely helps motivate me to increase my water intake. Love how it doesn’t make my bag feel heavy!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Great Bottle",
      "reviewDescription": "Can’t go wrong with nalgene: get yourself one of these. Big water capacity, comfortable to drink from, easy to grab and carry around, and perfect to add stickers to it. I love the purple colour and the new logo is really nice (it matches the cover and cover holder). In the picture you can see what it looks like with water in it and gift card for size reference. Don’t mind the corgi sticker, I added it."
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
          if (el.innerText.includes("easy to clean")) {
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
          if (el.innerText.includes("dishwasher")) {
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
          if (el.innerText.includes("spilling")) {
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
          if (el.innerText.includes("cold")) {
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
          if (el.innerText.includes("twisted")) {
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







  