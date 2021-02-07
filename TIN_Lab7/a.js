var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    //format localhost:8080/2/+/2
    read(req.url, res);

    res.end();
}).listen(8080);

function read(req, res) {
    if(!req.includes("favicon.ico"))
    {
        var tokens = req.split("/");
        console.log(tokens);
        var str;
        if(tokens.length == 4)
        {
            if(tokens[2] == '+')
            {
                var int = parseFloat(tokens[1]) + parseFloat(tokens[3]);
                str = tokens[1] + ' + ' + tokens[3] + ' = ' + int;
            }
            else if(tokens[2] == '-')
            {
                var int = parseFloat(tokens[1]) - parseFloat(tokens[3]);
                str = tokens[1] + ' - ' + tokens[3] + ' = ' + int;
            }
            else if(tokens[2] == '*')
            {
                var int = parseFloat(tokens[1]) * parseFloat(tokens[3]);
                str = tokens[1] + ' * ' + tokens[3] + ' = ' + int;
            }
            else if(tokens[2] == ':')
            {
                    var int = parseFloat(tokens[1]) / parseFloat(tokens[3]);
                    str = tokens[1] + ' : ' + tokens[3] + ' = ' + int;
            }
            else
            {
                str = 'inappropriate input!';
            }
        }
        if(!int || isNaN(int))
        {
            str = 'inappropriate input!';
        }
        res.write(str);
    }
}

