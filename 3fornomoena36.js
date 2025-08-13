


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 5,
      "reviewTitle": "Love it",
      "reviewDescription": "Love this fridge. Buy canadian!!! It is designed very well and has mega storage. It took about a month to receive. Gold handles, though, aren't very gold. Better than stainless!!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "arrived early",
      "reviewDescription": "Love, love, love my new Forno fridge!!! It arrived much earlier that expected and it is up and running, we've had no issues, installation was very straight forward, although with arriving early we had to tear our kitchen apart cause it didn't fit, which we knew, but we thought we had more time. The red sticker on the side of the fridge was definitely difficult to get off, but I used vegetable oil and a lil elbow grease to take it off and it worked. Anyway, love the new fridge and definitely would recommend this product to anyone. Thank you Forno and Amazon."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Great refrigerator",
      "reviewDescription": "I thought I had written a review, but I don't see it. So here's another one. I ordered this and when it first arrived, there was a dent in the side. I notified Amazon and they replaced it in a few days. It's really beautiful, and I'm surprised at liking it so much. At my previous house, I had a 36\" Sub Zero; I just didn't want to spring for the price this time. Also, it's just my husband and me now, and I didn't want to give up a cabinet for the motor that sits on top. I must say that there's more room somehow in this one. It doesn't make any noise, except when the door is open for more than a minute or so and it makes a tiny bell sound. It maintains a constant temperature. What I'm not crazy about, but not enough to wish I had a different refrig, is the size and number of the drawers. I guess two are enough for non-foodies, but I always have lots of vegetables, potatoes, onions, and cheeses, etc. The freezer is not huge, either. The ice maker is not automatic, which I consider a plus. There's a large ice container and you can turn it on and off very easily; in the evening, if there's no ice, turn it on. If the ice container is full, turn it off. The Sub Zero worked essentially the same way, but it was inconvenient to change the settings. The only demonstrable difference between this and the SZ is that ice cream isn't frozen solid for twenty minutes after it comes out of the freezer. This is a great refrig for a great price."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Fast delivery.",
      "reviewDescription": "It arrived quickly, and was much nicer than expected. Bought for a rehab - so never used."
    },
    {
      "ratingScore": 1,
      "reviewTitle": "DON'T BUY",
      "reviewDescription": "Shelves have few options and shelves on dorrs are much smaller than traditional refrigerators. This machine is flimsy and the french door latch and portion that goes between the doors is so flimsy that it doesn't close properly. It does not close easily and several times I've had to go back and shove closed because the thing is beeping at me. Purchased to match range and replaced a machine that is USA made and much sturdier, and only about 2 years old. Thankful we put the other machine in the basement, as this one doesn't hold much due to very poor design."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Sleek, Beautiful",
      "reviewDescription": "I didn't want to get my hopes up. I was really wanting a fridge with a water dispenser but we went with the Moena by Forno instead. I'm in love. It was delivered before expected in perfect condition. I love how the badge inside, on the back looks when you open the fridge. The badge on the front of the fridge comes seperate, so you can place it wherever you want or don't put it on at all. There is plenty of space for our groceries. The only issue I have with it is a big red sticker that came on the side. I tried taking it off and it was not pretty. I'll need some goo gone. Other than that very happy with my new fridge and I'm hoping it lasts a long time."
    },
    {
      "ratingScore": 3,
      "reviewTitle": "Forno 36\" Good quality refrigerator/freezer confusing, poorly written installation instructions",
      "reviewDescription": "We like our Forno Moena 36\" refrigerator/freezer. But installation was confusing and took much longer than it should have because the instructions were so bad. There are only 4 things needed to complete installation: 1 take off all the packing, 2 install the handles, 3 install the ice maker connection, 3 plug it in. Three of the 4 were fine. But, the instructions on how to install the ice maker connection were confusing and missed completely how to make the connection to the valve in the wall. My first several attempts leaked all over the place creating a big mop-up job. The problem turned out to be a small black rubber washer that should have been in one of the fittings. The washer was in the bag containing all the parts, but because the parts list was incomplete, this small piece was not easy to find, nor realize that it belonged in the fitting and that this was the problem causing the leaks. Good refrigerator - please fix the instructions."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Beautiful counter depth fridge",
      "reviewDescription": "I love the sleek look of the refrigerator. Love all the freezer space."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Nice!",
      "reviewDescription": "Very nice!"
    },
    {
      "ratingScore": 1,
      "reviewTitle": "Help! Fridge is dead and needs service!",
      "reviewDescription": "HELP! LESS THAN A YEAR OLD AND DEAD! How do I get service????"
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
          if (el.innerText.includes("sleek")) {
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
          if (el.innerText.includes("quiet")) {
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
          if (el.innerText.includes("plus")) {
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
          if (el.innerText.includes("gold")) {
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
          if (el.innerText.includes("poor")) {
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
          if (el.innerText.includes("poorly")) {
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







  