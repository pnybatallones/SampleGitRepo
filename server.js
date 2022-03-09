var express = require('express');
var app = express();
var weather = require('weather-js');

app.set('view engine', 'ejs');

app.get('/PH', function (req, res) {
    weather.find({search: 'Davao', degreeType: 'C'}, function(err, result) {
        if(err){
            console.log(err)
        } 
        else{                      
            var country =  result[0].location.name.split(", ")
            country = country[country.length - 1]                                        
            let data = {                
                'name': result[0].location.name,
                'country': "https://countryflagsapi.com/png/" + country,
                'lat': parseFloat(result[0].location.lat),
                'long': parseFloat(result[0].location.long),
                'current': {
                    'temperature': result[0].current.temperature,
                    'skytext': result[0].current.skytext,
                    'date': result[0].current.date,                    
                    'day': result[0].current.day,                    
                },
                'forecast': result[0].forecast,            
            } 
            console.log(result[0])                                    
            res.render('index', data);
        }        
      });    
});

app.get('/Japan', function (req, res) {
    weather.find({search: 'Tokyo', degreeType: 'C'}, function(err, result) {
        if(err){
            console.log(err)
        } 
        else{                      
            var country =  result[0].location.name.split(", ")
            country = country[country.length - 1]                                        
            let data = {                
                'name': result[0].location.name,
                'country': "https://countryflagsapi.com/png/" + country,
                'lat': parseFloat(result[0].location.lat),
                'long': parseFloat(result[0].location.long),
                'current': {
                    'temperature': result[0].current.temperature,
                    'skytext': result[0].current.skytext,
                    'date': result[0].current.date,                    
                    'day': result[0].current.day,                    
                },
                'forecast': result[0].forecast,            
            } 
            console.log(result[0])                                    
            res.render('index', data);
        }        
      });    
});

app.get('/US', function (req, res) {
    weather.find({search: 'Washington', degreeType: 'C'}, function(err, result) {
        if(err){
            console.log(err)
        } 
        else{                                                         
            let data = {                
                'name': result[0].location.name,
                'country': "https://countryflagsapi.com/png/us",
                'lat': parseFloat(result[0].location.lat),
                'long': parseFloat(result[0].location.long),
                'current': {
                    'temperature': result[0].current.temperature,
                    'skytext': result[0].current.skytext,
                    'date': result[0].current.date,                    
                    'day': result[0].current.day,                    
                },
                'forecast': result[0].forecast,            
            } 
            console.log(result[0])                                    
            res.render('index', data);
        }        
      });    
});


app.listen(8080);