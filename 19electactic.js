


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 5,
      "reviewTitle": "100% Top Quality",
      "reviewDescription": "Keeps my Food Cold, Fresh, Frozen💯 Extremely Quiet, just make sure you don't buy Large items."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "Decent product",
      "reviewDescription": "It's probably a decent product. I didn't bother opening it. I returned it"
    },
    {
      "ratingScore": 3,
      "reviewTitle": "Not frost free.",
      "reviewDescription": "I bought this for my elderly mother in Assisted Living. I thought a separate freezer would be the answer to it freezing up. However, it is also freezing in the main refrigerator as well. I turned the temperature down and like the other, I had to run the blow dryer to unfreeze it and now I have to do the both the freezer and main refrigerator."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Spacious",
      "reviewDescription": "It gets very cold, and works great- it was more spacious than expected"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "So far so good!",
      "reviewDescription": "really impressed with the size and the capacity. packaging was excellent, arrived in perfect condition. cooling power is really good. Highly recommend it."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Excellent small fridge/freezer",
      "reviewDescription": "Perfect for my basement. Runs quietly and temps are where they should be."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Mini fridge with real freezer - cold enough to make ice cubes",
      "reviewDescription": "The fridge has two removable glass shelves, a white basket at the bottom to store fruit and veggies, and two storage racks at the door which I can remove as well. The separate freezer compartment on top is empty. The fridge includes a small ice tray. It’s a free-standing unit and uses a three-pronged plug. I can also change the side of the door. I measured the wall thickness of the freezer section, and it’s about 2 inches on the left and right sides; the top is about 2 ¼ inches thick. I also measured the freezer compartment’s depth, which is 14 ½ inches; the inside height is about 7 inches, and the width is 14 inches. The fridge compartment has a height of about 18 ¾ inches, and I measured its depth to be around 14 ¼ inches. The inside width of the fridge is about 15 ½ inches. The two glass shelves are each 9 ½ inches deep and 15 ¼ inches wide. "
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Awesome!",
      "reviewDescription": "Really awesome fridge/freezer combo in a smaller form factor. I was currently using a wine cooler that only gets so cold. With this, I can have a freezer too! I really love it. Great for college, smaller apartments, bedrooms, gamerooms, ect!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Basic no frills combination fridge/freezer - but that's what I like about it",
      "reviewDescription": "This is what I would consider a mid-sized \"mini\" fridge. Has a separate fridge and freezer space which is great for a dorm or college apartment setup, extra fridge in the basement for snacks/drinks, for the garage, workshop, home office, or in my case - my wife claimed it for her craft room. Hey, whatever gets her to use it (the craft room that is). The fridge is fairly basic, but in this case I think it speaks to simplicity - it does what it's supposed to do, it's not trying to be the center of attention. It's quiet and tucked out of the way, it's there when you need it. So grab a cold one of your choice and get back to work."
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
          if (el.innerText.includes("food cold")) {
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
          if (el.innerText.includes("good")) {
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
          if (el.innerText.includes("suitable")) {
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
          if (el.innerText.includes("")) {
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







  