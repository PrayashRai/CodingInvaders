function fun(N,M){

    var arr=[];
    
         var counter=0
    
        for(var i = 0 ; i < N ; i ++){
    
            arr.push(i);
    
    }
    
        for(var j = 0 ; j < M ; j ++){
    
            counter+=1;
    
        }
    
        console.log(arr)
        console.log(counter)
    }

    let displayExplanation = () => {
         explanation = "";
        explanation += "function fun(N, M) {\n\n";
        explanation += "var arr = [];\n\n";
        explanation += "var counter = 0;\n\n";

        explanation += "for (var i = 0; i < N; i++) {\n\n";
        explanation += "arr.push(i);\n\n";
        explanation += "}\n\n";

        explanation += "for (var j = 0; j < M; j++) {\n\n";
        explanation += "counter += 1;\n\n";
        explanation += "}\n\n\n";

        explanation += "Time Complexity:\n";
        explanation +=
          "1. The first loop runs N times, resulting in a time complexity of O(N).\n";
        explanation +=
          "2. The second loop runs M times, resulting in a time complexity of O(M).\n";
        explanation += "3. The overall time complexity is O(N + M).\n";

        explanation += "\nSpace Complexity:\n";
        explanation +=
          "1. The function initializes an empty array 'arr', which takes constant space (O(1)).\n";
        explanation +=
          "2. The 'arr' array stores N elements, resulting in a space complexity of O(N).\n";
        explanation += "3. The counter variable takes constant space (O(1)).\n";
        explanation += "4. The overall space complexity is O(N).\n";

        document.getElementById("explanation").innerText = explanation;
      }

      // Call the function to display the explanation
      displayExplanation();