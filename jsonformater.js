var json = JSON.parse(value);

var json3 = [];

for (var index = 0; index < json.length; index++) {
    const element = json[index];
    json3.push(element);
}

var arraysCerto = json3.filter(function (array) {
    if(array["{#SNMPVALUE}"]) {
        return array;
    }
});

var nomesCpu = json3.filter(function (array) {
    
    for (var index2 = 0; index2 < arraysCerto.length; index2++) {
        const element = arraysCerto[index2];

        if (array["{#SNMPINDEX}"] == element["{#SNMPVALUE}"]) {
            return array;
        }
        
    }

});

var relacionamentoArrays = [];
for (var index3 = 0; index3 < arraysCerto.length; index3++) {
    var element = arraysCerto[index3];

    var nomeCpu = nomesCpu.filter(function (array) {
        if (element["{#SNMPVALUE}"] == array["{#SNMPINDEX}"]) {
            return array;
        }
    });

    relacionamentoArrays.push({
        "{#SNMPINDEX}": element["{#SNMPINDEX}"],
        "{#CPUNAME}": nomeCpu[0]["{#CPUNAME}"],
        "{#SNMPVALUE}": element["{#SNMPVALUE}"]
    });
    
}

return JSON.stringify(relacionamentoArrays);