App = function()
{
     this.tempo=180;
      // wade.setLoadingImages('loading.jpg');
    
    // this is where the WADE app is initialized
	this.init = function()
	{
	    
        // load a scene
        wade.loadScene('preload.wsc', false, function()
        {
		wade.loadScene('scene1.wsc', false, function()
        {
            // the scene has been loaded, do something here

        });
        });
	};
	this.load =function(){
	
	wade.loadAudio('SmallExplosion8-Bit.ogg');

	};
};
