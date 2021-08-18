    // Get selection on current page
    // Check if something is selected

    let { selection } = figma.currentPage;
    let length = selection.length;

    if (!(length > 0)) {

      figma.closePlugin('Please select at least one node');

    } else {

      
      
      for(let i = 0; i < length; i++) {

      let width = selection[i].width;
      let height = selection[i].height;
      let nodes = [];

        if (!(selection[i].type === 'PAGE')) {

          // Flip W & H

          if (height < 0.01 && width >= 0.01) { nodes.push(selection[i].resize(0.01, width))} else
          if (height >= 0.01 && width < 0.01) { nodes.push(selection[i].resize(height, 0.01))} 
          else { nodes.push(selection[i].resize(height, width))}

        }

        figma.closePlugin('Transposition Done');

    }

    }
 

   