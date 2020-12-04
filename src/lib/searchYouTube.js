var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    //contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('recast.ly: Failed to search.', error);
    }
  });
};

export default searchYouTube;


/*
 var Parse = {

    server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

    create: function(message, successCB, errorCB = null) {
      $.ajax({
        url: Parse.server,
        type: 'POST',
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: successCB,
        error: errorCB || function(error) {
          console.error('chatterbox: Failed to fetch messages', error);
        }
      });
    },

    readAll: function(successCB, errorCB = null) {
      $.ajax({
        url: Parse.server,
        type: 'GET',
        data: { order: '-createdAt' },
        contentType: 'application/json',
        success: successCB,
        error: errorCB || function(error) {
          console.error('chatterbox: Failed to fetch messages', error);
        }
      });
    }

  };
 */