// define url to constant

// const url = "../static/big_news_output_sample.csv"
const url = "https://media.githubusercontent.com/media/vgpass/Fake_News_Analysis_Project_4/main/docs/static/big_news_output_sample.csv"

const dropdown = d3.select("#selDataset");

// Fetch the CSV data and console log it
d3.csv(url).then(function(data) {
  data.forEach(function(row) {
   dropdown
      .append("option")
      .attr("value", row.id)
      .attr("data-title", row.title)
      .attr("data-text", row.text)
      .attr("data-label", row.label)
      .text(row.id)})

      function updateData() {
        // Get the selected option element
        const selectedOption = dropdown.node().selectedOptions[0];
    
        // Get the "title" and "text" attributes from the selected option
        const title = selectedOption.getAttribute("data-title");
        const text = selectedOption.getAttribute("data-text");
        const label = selectedOption.getAttribute("data-label")
    
        // Use D3.js to update the div elements with the "title", "label" and "text" attributes
        d3.select("#title").text(title);
        d3.select("#text").text(text);
        var color = label === "REAL" ? "#218527" : "#FF0000";
        // color = '#FF0000'
        d3.select("#real-fake").text(label).style('color', color);
      }
    
      // Add a listener to the dropdown to call the updateData function when the selection changes
      dropdown.on("change", updateData);
    
      // Call the updateData function initially to populate the divs with the initial selection
      updateData();

    }).catch(function(error) {
      console.error("Error loading the CSV data:", error);
});