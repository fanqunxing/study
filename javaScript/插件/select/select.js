function Select(dom)
{
	var _dom = document.getElementById(dom);
	var _val = _dom.value;

	domHook();
	htmlHook();

	function setVal()
	{
		_dom.value;
	}


	function htmlHook()
	{
		if(htmlHook.isRun == true)
		{
			return false;
		}
		_dom.addEventListener("DOMSubtreeModified",function(){
			alert(1);
		});
		htmlHook.isRun = true;
	}




	/*
	 * dom val检测
	 */
	function domHook()
	{
		Object.defineProperty(_dom, "value",{
		    enumerable:true,
		    configurable:true,
		    get:function(){
		        console.log('listen get');
		        return _val;
		    },
		    set:function(val){
		        console.log('listen set');
		        _val = val;
		    }
		});
	}


	return {
		setVal:setVal
	}
}