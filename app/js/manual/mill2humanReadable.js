function mill2humanReadable(seconds)
{
seonds = 0;
var numyears = Math.floor(seconds / 31536000);
var numdays = Math.floor((seconds % 31536000) / 86400); 
var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
return {"years" : numyears , "days" : numdays ,"hours" : numhours ,"minutes" : numminutes ,"seconds" : numseconds};

}