var filo = filo || {};
filo.template={

  patientUpdate:{
  	"header":"Update Patient data"
  	,"patientUpdate": "<div id=\"errorBlock\" class=\"hide\"><span>Sorry, but we can't continue until you fix everything that's marked in </span></div><form><div id=\"name\" class=\"formFieldInlinBlock\"><div class=\"label\"><label>Name:</label>  </div><input type=\"text\"></input> </div>\t<div id=\"gender\" class=\"formFieldInlinBlock\"><label>Gender:</label>  <select><option>-select-</option><option>-Male-</option><option>-Female-</option></select></div>\t<div id=\"dob\"><div class=\"label\"><label>DOB:</label></div>\t<input type=\"text\" placeholder=\"dd/mm//yyyy\"></input> </div>\t<div id=\"address\"><label>address:</label><input type=\"text\" ></input> <input type=\"text\" style=\"margin-left:55px\"></input> <input type=\"text\" style=\"margin-left:55px\"></input> </div>\t<div id=\"city\" class=\"formFieldInlinBlock\"><div class=\"label\"><label>city:</label></div><input type=\"text\" ></input> </div>\t<div id=\"pincode\" class=\"formFieldInlinBlock\"><div class=\"label\"><label>pincode:</label></div>\t<input type=\"text\" ></input> </div><div id=\"state\" class=\"formFieldInlinBlock\"><div class=\"label\"><label>state:</label></div>\t<input type=\"text\" ></input> </div><div id=\"country\" class=\"formFieldInlinBlock\"><div class=\"label\"><label>country:</label></div>\t<input type=\"text\" ></input> </div><div id=\"buttonContainer\"><button id=\"update\"> update</button><button id=\"cancel\"> cancel</button></div></form>"	
  }
 ,patientDetails:{
 	"header":"Details Of Examination"
 	,"patiendMedicalDetails":"<div id=\"errorBlock\" class=\"hide\"><span>Sorry, but we can't continue until you fix everything t   hat's marked in </span></div>\t<form><div id=\"patientInfo\"><div><label>patientID:</label><span id=\"patientID\">000501</span></div><div><label>Name:</label><span id=\"patientName\">Jane Doe</span></div><div><label>Age:</label><span id=\"age\">30</span></div><div><label>Gender:</label><span id=\"Gender\">F</span></div></div><div id=\"DOE\"><div><label>Date of Examination:</label><span id=\"dateOfExamination\">18/03/2015</span></div></div><div><div id=\"findingContainer\" class=\"inlineBlock halfWidth\"><div><div class=\"centerText\"><span class=\"bold\">Findings</span></div></div><div class=\"centerText\"><textarea rows=\"10\" cols=\"25\" id=\"findings\"></textarea></div></div><div id=\"InvestigationContainer\" class=\"inlineBlock halfWidth\"><div ><div class=\"centerText\"><span class=\"bold\">Investigation needed</span></div></div><div class=\"centerText\"><textarea rows=\"10\" cols=\"25\" id=\"Investigation\"></textarea></div></div><div id=\"presciptionBlocks\"><div class=\"centerText\"><span class=\"bold\">Presciption</span></div><div id=\"prescriptionContainer\" class=\"inlineBlock halfWidth\"><div class=\"centerText\"><span class=\"bold\"> <a href=\"#\" id=\"addMedicines\">Add Medicines</a> </span></div><div class=\"centerText\"><textarea rows=\"10\" cols=\"25\" id=\"prescription\"></textarea></div></div><div id=\"appliancesContainer\" class=\"inlineBlock halfWidth\"><div class=\"centerText\"><span class=\"bold\"> <a href=\"#\" id=\"addAppliances\">Add appliances</a> </span></div><div class=\"centerText\"><textarea rows=\"10\" cols=\"25\" id=\"appliances\"></textarea></div></div></div></div><div id=\"buttonContainer\"><button id=\"update\"> update</button>\t<button id=\"cancel\"> cancel</button></div></form>"
 }

 ,updateStock:{
 	"header":"Update Stock"
 	,"updateStock":"<div><h5>Add Medicines</h5><div><select class=\"updateStockselect\"><option>Medicine Name(QTY)</option><option>Medicine Name(QTY)</option><option>Medicine Name(QTY)</option><option>Medicine Name(QTY)</option></select> <label>Quantity:</label><input type=\"text\" class=\"updateStockinput\"/><button id=\"addMedicines\">Add</button></div> </div><div ><h5>Add Appliances</h5><div><select class=\"updateStockselect\"><option>Appliances(QTY)</option><option>Appliances(QTY)</option><option>Appliances(QTY)</option><option>Appliances(QTY)</option></select> <label>Quantity:</label><input type=\"text\" class=\"updateStockinput\"/><button  value=\"Add\" id=\"addAppliances\">Add</button></div> </div><div id=\"buttonContainer\"><button id=\"done\">done</button><button id=\"reset\">reset</button></div>"
 }
  
}





