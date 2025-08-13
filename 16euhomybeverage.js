


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 4,
      "reviewTitle": "Looks nice and works well",
      "reviewDescription": "We’ve had this fridge for a few months now and really like it. It looks nice, was easy to install, is easy to open and close, and has great storage inside. It’s even easy for our toddler to open to help herself to items (and has a child lock setting for when we don’t want that). I took one star off because it can be pretty noisy, but not the end of the world for us."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "holds temperature well",
      "reviewDescription": "Fridge holds 34 -35 degrees and is not too noisy. You can hear it running but it is not too noticeable. The thin stainless door face surface material came damaged twice. Amazon offered discounts on the first unit but I wanted it to look new in a new wet bar of a new home. The second unit came with similar damage but in a less conspicuous area. I don't feel like having to pull this one out like the last, move all the drinks and then dispose of all of the packaging again. The company made contact offering an acceptable solution other than attempting another delivery. They claim their pre shipping inspections and packaging should prevent such damage and believe it was due to shipping process after leaving their facility. Other than the cosmetic damage which maybe would have not happened with a third unit, the fridge works very well after a couple of months now. Overall for the price this a a very good value, if you can get an undamaged one it would be an amazing deal. If it had arrived dent free the second time it would be 5 stars all the way."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Works as it should",
      "reviewDescription": "I've only had this a week but so far so good. Keeps my beer cold! It did come dented on the top because UPS doesn't care what's in the box. It arrived upside down. I let it sit for over 24 hours right side up and it seems to be working just fine."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "Overall a great purchase",
      "reviewDescription": "Overall a great purchase! Arrived on-time and not damaged. The fridge is the perfect size for my application, quiet and keeps beer cold. I have this installed as if it's a built in and it doesn't overheat. The only small issue is the corner of the doors finish (see Pic) is a little rough compared to the rest of the door, hard to see unless you're at a certain angle looking at it. Definitely recommend for the price."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "HOLDS MUCH MORE THAN I EXPECTED! Love the look and it is perfect in my new remodeled kitchen!",
      "reviewDescription": "Even though this mini-fridge measures only 15\" wide... it holds a TON of water bottles! I can fit a 40-pack 16.9 oz water bottles in it with no problem and room to spare for my other misc drinks too! It keeps my bottles all perfect drinking termperature. Recommend highly."
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
          if (el.innerText.includes("quiet")) {
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
          if (el.innerText.includes("sleek")) {
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
          if (el.innerText.includes("price")) {
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
          if (el.innerText.includes("dent")) {
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
          if (el.innerText.includes("stopped")) {
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







  