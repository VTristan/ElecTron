const { isEmptyObject } = require("jquery");

//suppression des inputs
function delete_vd(e){
    document.getElementById('vd').value = '';
}function delete_va(e){
    document.getElementById('va').value = '';
}function delete_qd(e){
    document.getElementById('qd').value = '';
}function delete_qa(e){
    document.getElementById('qa').value = '';
}function delete_pd(e){
    document.getElementById('pd').value = '';
}function delete_pa(e){
    document.getElementById('pa').value = '';
}

function differenceV(e) {
    variation("vd","va","vDiff")
}
function differenceQ(e) {
    variation("qd","qa","qDiff")
}
function differenceP(e) {
    variation("pd","pa","pDiff")
}

function variation(x,y,z){
    vd = document.getElementById(x).value;
    va = document.getElementById(y).value; 
    soustr = va - vd;
    tv = ((va-vd)/vd)*100;
    sign = "("+tv+"%)";
    if (tv > 0) {
        sign = "(+"+tv+"%)";
    }
    document.getElementById(z).innerHTML = soustr + " " + sign; 
}





function calculerV(){
    if (document.getElementById("vd").value>0){
        calculerVA();
    } else if (document.getElementById("va").value>0){
        calculerVD();
    }
} function calculerVA(){
    vd = document.getElementById("vd").value;
    qd = document.getElementById("qd").value;
    pd = document.getElementById("pd").value;
    pa = document.getElementById("pa").value;
    va = pa/qd;
    document.getElementById("qa").value = qd;
    document.getElementById("va").value = va;
    variation("vd","va","vDiff")
    variation("qd","qa","qDiff")
    variation("pd","pa","pDiff")
}function calculerVD(){
    va = document.getElementById("va").value;
    qd = document.getElementById("qd").value;
    pd = document.getElementById("pd").value;
    pa = document.getElementById("pa").value;
    vd = pd/qd;
    document.getElementById("qa").value = qd;
    document.getElementById("vd").value = vd;
    variation("vd","va","vDiff")
    variation("qd","qa","qDiff")
    variation("pd","pa","pDiff")
}

//

function calculerQ() {
    if (document.getElementById("qd").value>0){
        calculerQA();
    } else if (document.getElementById("qa").value>0){
        calculerQD();
    }
}function calculerQA() {
    vd =  document.getElementById("vd").value;
    va =  document.getElementById("va").value;
    qd =  document.getElementById("qd").value;
    
    document.getElementById("qa").value = qd;
    document.getElementById("pd").value = vd * qd;
    document.getElementById("pa").value = va * qd;
    variation("vd","va","vDiff")
    variation("qd","qa","qDiff")
    variation("pd","pa","pDiff")
}function calculerQD() {
    vd =  document.getElementById("vd").value;
    va =  document.getElementById("va").value;
    qa =  document.getElementById("qa").value;
    
    document.getElementById("qd").value = qa;
    document.getElementById("pd").value = vd * qd;
    document.getElementById("pa").value = va * qd;
    variation("vd","va","vDiff")
    variation("qd","qa","qDiff")
    variation("pd","pa","pDiff")
}

//

function calculerP(){
    if (document.getElementById("pd").value>0){
        calculerPA();
    } else if (document.getElementById("pa").value>0){
        calculerPD();
    }
}function calculerPA() {
    vd = document.getElementById("vd").value;
    va = document.getElementById("va").value;
    pd = document.getElementById("pd").value;

    qd = pd/vd;
    pa = (va * qd);
    
    document.getElementById("qd").value = qd;
    document.getElementById("qa").value = qd;
    document.getElementById("pa").value = pa;
    variation("vd","va","vDiff")
    variation("qd","qa","qDiff")
    variation("pd","pa","pDiff")
}function calculerPD() {
    vd =  document.getElementById("vd").value;
    va =  document.getElementById("va").value;
    pa =  document.getElementById("pa").value;

    qd = pa/va;
    pd = (vd * qd);
    
    document.getElementById("qd").value = qd;
    document.getElementById("qa").value = qd;
    document.getElementById("pd").value = pd;
    variation("vd","va","vDiff")
    variation("qd","qa","qDiff")
    variation("pd","pa","pDiff")
}

function fog(){
//TODO
}

function sun(){
//TODO
}

function moon(){
//TODO
}