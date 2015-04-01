(function(name, module, context){
	
	if(window.define)
		define([], module);
	else
		filo.updateStock = module(context.validator);


})("updateStock", function(validatorObj){

	var updateStock = {
		 dateEleId:"date"
		,validator: validatorObj
		

		,printDateTime: function(){

				var now = new Date();
				var strDateTime = [[AddZero(now.getDate()), AddZero(now.getMonth() + 1), now.getFullYear()].join("/"), [AddZero(now.getHours()), AddZero(now.getMinutes())].join(":"), now.getHours() >= 12 ? "PM" : "AM"].join(" ");

                //Pad given value to the left with "0"
	            function AddZero(num) {
                         return (num >= 0 && num < 10) ? "0" + num : num + "";
                };

                document.getElementById(this.dateEleId).innerHTML = strDateTime	;					


		}

		,eventObj:{
			handleEvent: function(event){
				    var parent = filo.updateStock;
					switch(event.target.id){

						case "done":
									   alert('update button is clicked');
									   parent._validateFields(event.target, parent);	
						               break;

						case "addMedicines":              	 
									   alert('add medicines clicked');
									   break;

						case "addAppliances":
									   alert('add addAppliances clicked');
									   break;					   		

						case "reset":
									   window.location.reload();
						               break;

					}

					event.stopPropagation();
					event.preventDefault();
			}
			 
		}

		,_validateFields:function(target, viewObj){
				
				var parentNode = "FORM";
				var obj = target.parentNode;
				var inputTypeEleArr = [];
				var length;
				while( obj.nodeName != parentNode){
					obj = obj.parentNode;
				};

				parentNode = obj;
				inputTypeEleArr = parentNode.querySelectorAll('input');
				length = inputTypeEleArr.length;
				var validateFlag =  true;
				for(var iloop=0; length--; iloop++){
					 if(!viewObj.validator.Empty(inputTypeEleArr[iloop]))
					 	  validateFlag = false;
				};


				if(!validateFlag){
					validateFlag = true;
					document.getElementById("errorBlock").className="show";
				}else{
					document.getElementById("errorBlock").className="hide";
				}


				//alert('validator');
				
		} 

		,init: function(eleIdArr){
			this.printDateTime();
			this.elementsArr = [];
			var length = eleIdArr.length;
			for(var iloop=0; length--; iloop++){
				var obj =  eleIdArr[iloop];
				this.elementsArr.push(obj.eleId);	
				document.getElementById(obj.eleId).addEventListener(obj.event, this.eventObj, false);
			}
		}

	};


	return updateStock;



}, filo);