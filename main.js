const {
    convertAsciiArtToString,
    createAALRelationAlphabetDict
} = require("./utils");

const w = 4
const h = 5
const separator = "----"

const asciiLetters = [
`### 
# # 
### 
# # 
### `,
`##  
# # 
# # 
# # 
##  `,
`##  ##   #  ### ### ###      #  # # ### # # 
# # # # # # #    #   #      ##  # #   #   # 
##  ##  # # ##   #   #       #  ### ###  #  
#   # # # # #    #   #       #    # #   #   
#   # #  #  #   ###  #      ###   # ### # # `,
    `# #                  ## ### ##   #  ###  ##     ##  ###  ##  ##     ###     ##                       #           #  ### ### # # ### 
    # # ### ### # #     #    #  # # # # # # #       # # # # ##  ##  # # # # ### # #     ### # # ### ### ### # #     ##    #   # # # #   
    # # ##  #   ###      #   #  ##  # # # # # #     ##  #   ### ### ### # # #   # #     # # ### ##  #    #  ###      #  ###  ## ### ### 
    # # ### #     #       #  #  # # # # # # # #     #   ###  ##  ## ### # # #   # #     ### ### ### #    ##   #      #  #     #   #   # 
     #          ###     ##   #  # #  #  # #  ##     #       ##  ##      ###     ##        #                 ###     ### ### ###   # ### `,

];

(async () => {
    dictRelation_AAL_A = await createAALRelationAlphabetDict(separator);
    for(let item of asciiLetters)
        console.log(await convertAsciiArtToString(dictRelation_AAL_A, item, w, h));
})()
