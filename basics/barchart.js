//this is a code for a basic bar chart
const dataArray = [11, 5,18,23,34,54,56];

const someSVG = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

someSVG
  .selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("height", (d, i) => {
    return d * 10;
  })
  .attr("width", "50")
  .attr("x", (d, i) => {
    //d= data point
    //i= index
    return 60 * i;
  })
  .attr("y", (d,i)=>{
      return 1000-(d*10)//think of it as steps backward from a point
  })
  .attr("fill","pink");
//selectAll asks the browser to find the svg and find all the
//rectangles insidde of it; is it does it will return an array of elements
//otherwise it will return an empty selection
//the returned selection will be mapped to the dataArray in the
//data() method. If the number of data points is more than the number of
//rectangles, say for example there are two rectangles and three data points
//the third element will be put into an 'enter' selection mapped into
//an empty selection
//.enter().append() adds a rectangle for every item in the enter selection
// at first we have an empty selection as there are no rectangles,
// so all three of our data points move into an enter selection
// then with .enter().append('rect') we add a rectangle for every single item
// in our enter selection.
