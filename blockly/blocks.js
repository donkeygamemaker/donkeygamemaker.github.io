//Images
let IMG_RIGHT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAKZJREFUKJGdksENxCAMBBckKqEE9+GCqYYC+GOk2L7PRUoiknA3P4RnsWwCDri744EQQjie49PlGyeZiAgAxhjjrYsTzMyqqv7ArWhmthfZlyW5996PIjPzfvcqb9u2zcRrwFQWEXF3FxG5m8lMjrPCGbM1RgCIMUYASCmlnHNeDQRwHlhrrf0UcF2Vquq+rlJKWQqYfRIzs6UOiIhqrVVE5KeX/+EDfSftXvuCklwAAAAASUVORK5CYII=";
let IMG_LEFT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAKBJREFUKJGVksENRCEIRNHESijBPijYaizAu5jIspc1IebrZ99JJwxGhgAbqqq7ZgkhhHWOt8Kb0WVWVR1jDACAnHN+LT4hIkJE5DZ/ftj7sYE1Lo2IyDbovfereddtgznnPJpPX2JmVlVlZgZ4mPYexw13zoiIKaUEABBj9O8HImJrrb0ObFFKKSsmERFXVAsbjXtJnl5mZq611tf1/IcvRQTtXq9F+dwAAAAASUVORK5CYII=";
let IMG_STR1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC";
let IMG_STR2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==";
//???????
Blockly.Blocks['a']={init:function(){}};
Blockly.JavaScript['a']=function(block){return "";};
//If then
Blockly.Blocks['if_then'] = {
  init: function() {
    this.appendValueInput("BOOL")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("then");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['if_then'] = function(block) {
var value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
var code = 'if('+String(value_bool)+'){'+statements_do+'}\n';
return code;
};
//If then else
Blockly.Blocks['if_then_else'] = {
  init: function() {
    this.appendValueInput("BOOL")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("THEN")
        .setCheck(null)
        .appendField("then");
    this.appendStatementInput("ELSE")
        .setCheck(null)
        .appendField("else");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['if_then_else'] = function(block) {
var value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
var statements_then = Blockly.JavaScript.statementToCode(block, 'THEN');
var statements_else = Blockly.JavaScript.statementToCode(block, 'ELSE');
var code = 'if('+String(value_bool)+'){'+statements_then+'}else{'+statements_else+'}\n';
return code;
};
//While
Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("BOOL")
        .setCheck("Boolean")
        .appendField("while");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['while'] = function(block) {
var value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
var code = 'while('+String(value_bool)+'){'+statements_do+'}\n';
return code;
};
//break
Blockly.Blocks['break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setPreviousStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['break'] = function(block) {
  var code = 'break;\n';
  return code;
};
//For each
Blockly.Blocks['foreach'] = {
  init: function() {
    this.appendValueInput("l")
        .setCheck(null)
        .appendField("for each item in");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['foreach'] = function(block) {
  var value_l = Blockly.JavaScript.valueToCode(block, 'l', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = value_l+'.forEach(function(FOREACH_ELEM){'+statements_do+'});\n';
  return code;
};
//Item of foreach
Blockly.Blocks['foreach_item'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("the item");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['foreach_item'] = function(block) {
  var code = 'FOREACH_ELEM';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//True
Blockly.Blocks['true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("true");
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['true'] = function(block) {
  var code = 'true';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//False
Blockly.Blocks['false'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("false");
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['false'] = function(block) {
  var code = 'false';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Not
Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendField("not");
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['not'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '!'+value_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//And
Blockly.Blocks['and'] = {
  init: function() {
    this.appendValueInput("B1")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("and");
    this.appendValueInput("B2")
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['and'] = function(block) {
  var b1 = Blockly.JavaScript.valueToCode(block, 'B1', Blockly.JavaScript.ORDER_ATOMIC);
  var b2 = Blockly.JavaScript.valueToCode(block, 'B2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = b1+"&&"+b2;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Or
Blockly.Blocks['or'] = {
  init: function() {
    this.appendValueInput("B1")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("or");
    this.appendValueInput("B2")
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['or'] = function(block) {
  var b1 = Blockly.JavaScript.valueToCode(block, 'B1', Blockly.JavaScript.ORDER_ATOMIC);
  var b2 = Blockly.JavaScript.valueToCode(block, 'B2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = b1+"||"+b2;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Equal
Blockly.Blocks['equal'] = {
  init: function() {
    this.appendValueInput("s1");
    this.appendDummyInput()
        .appendField("==");
    this.appendValueInput("s2");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['equal'] = function(block) {
  var b1 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
  var b2 = Blockly.JavaScript.valueToCode(block, 's2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = b1+"=="+b2;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Number
Blockly.Blocks['number_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "INP");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['number_value'] = function(block) {
  var number_inp = block.getFieldValue('INP');
  var code = String(number_inp);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//To number
Blockly.Blocks['number_to'] = {
  init: function() {
    this.appendValueInput("obj")
        .setCheck(null)
        .appendField("To number");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['number_to'] = function(block) {
  var value_obj = Blockly.JavaScript.valueToCode(block, 'obj', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'Number('+value_obj+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math add
Blockly.Blocks['m_add'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_add'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+'+'+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math subtract
Blockly.Blocks['m_subtract'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("-");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_subtract'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+'-'+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math multiply
Blockly.Blocks['m_multiply'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("*");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_multiply'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+'*'+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math subdivide
Blockly.Blocks['m_subdivide'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("/");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_subdivide'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+'/'+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math equal
Blockly.Blocks['m_equal'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("==");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_equal'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+"=="+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math not equal
Blockly.Blocks['m_not_equal'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("!=");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_not_equal'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+"!="+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math bigger equal
Blockly.Blocks['m_big_equal'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("<=");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_big_equal'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+"<="+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math smaller equal
Blockly.Blocks['m_sma_equal'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(">=");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_sma_equal'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+">="+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math bigger
Blockly.Blocks['m_big'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("<");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_big'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+"<"+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math smaller
Blockly.Blocks['m_sma'] = {
  init: function() {
    this.appendValueInput("N1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(">");
    this.appendValueInput("N2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['m_sma'] = function(block) {
  var value_n1 = Blockly.JavaScript.valueToCode(block, 'N1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_n2 = Blockly.JavaScript.valueToCode(block, 'N2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = String(value_n1)+">"+String(value_n2);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Math operation
Blockly.Blocks['math_operation'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["cos","cos"], ["sin","sin"], ["tan","tan"], ["acos","acos"], ["asin","asin"], ["atan","atan"], ["abs","abs"], ["round","round"], ["sqrt","sqrt"]]), "INP");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['math_operation'] = function(block) {
  var inp = block.getFieldValue('INP');
  var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'Math.'+String(inp)+"("+String(value_num)+")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Random fraction
Blockly.Blocks['number_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("random fraction");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['number_random'] = function(block) {
  var code = 'Math.random()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Random between
Blockly.Blocks['number_random_between'] = {
  init: function() {
    this.appendValueInput("v1")
        .setCheck(null)
        .appendField("random between");
    this.appendValueInput("v2")
        .setCheck(null)
        .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['number_random_between'] = function(block) {
  var i = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var a = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'randomRange('+i+','+a+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//String value
Blockly.Blocks['string_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(IMG_STR1, 15, 10, { alt: "", flipRtl: "TRUE" }))
        .appendField(new Blockly.FieldTextInput(""), "TXT")
        .appendField(new Blockly.FieldImage(IMG_STR2, 15, 10, { alt: "", flipRtl: "TRUE" }));
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_value'] = function(block) {
  var text_txt = block.getFieldValue('TXT');
  var code = '"'+text_txt.replace('"','\\"')+'"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//To string
Blockly.Blocks['string_to'] = {
  init: function() {
    this.appendValueInput("obj")
        .setCheck(null)
        .appendField("To string");
    this.setOutput(true, "String");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_to'] = function(block) {
  var value_obj = Blockly.JavaScript.valueToCode(block, 'obj', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'String('+value_obj+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Join strings
Blockly.Blocks['string_join'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("join");
    this.appendValueInput("s1")
        .setCheck("String")
        .appendField("str1");
    this.appendValueInput("s2")
        .setCheck("String")
        .appendField("str2");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_join'] = function(block) {
  var value_s1 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s2 = Blockly.JavaScript.valueToCode(block, 's2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_s1+"+"+value_s2;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Length of string
Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput("TXT")
        .setCheck("String")
        .appendField("length");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_length'] = function(block) {
  var value_txt = Blockly.JavaScript.valueToCode(block, 'TXT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_txt+".length";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Strings equal
Blockly.Blocks['string_equal'] = {
  init: function() {
    this.appendValueInput("s1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("s2")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_equal'] = function(block) {
  var s1 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
  var s2 = Blockly.JavaScript.valueToCode(block, 's2', Blockly.JavaScript.ORDER_ATOMIC);
  var code=s1+"=="+s2;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//String starts
Blockly.Blocks['string_starts'] = {
  init: function() {
    this.appendValueInput("s1")
        .setCheck("String")
        .appendField("starts");
    this.appendValueInput("s2")
        .setCheck("String")
        .appendField("with");
    this.setOutput(true, "Boolean");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_starts'] = function(block) {
  var s1 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
  var s2 = Blockly.JavaScript.valueToCode(block, 's2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_s1+".startsWith("+s2+")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//String ends
Blockly.Blocks['string_ends'] = {
  init: function() {
    this.appendValueInput("s1")
        .setCheck("String")
        .appendField("ends");
    this.appendValueInput("s2")
        .setCheck("String")
        .appendField("with");
    this.setOutput(true, "Boolean");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_ends'] = function(block) {
  var s1 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
  var s2 = Blockly.JavaScript.valueToCode(block, 's2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_s1+".endsWith("+s2+")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Split String
Blockly.Blocks['string_split'] = {
  init: function() {
    this.appendValueInput("s1")
        .setCheck("String")
        .appendField("split string");
    this.appendValueInput("s2")
        .setCheck("String")
        .appendField("segment");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_split'] = function(block) {
  var value_s1 = Blockly.JavaScript.valueToCode(block, 's1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s2 = Blockly.JavaScript.valueToCode(block, 's2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_s1+".split("+value_s2+")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get string character
Blockly.Blocks['string_char'] = {
  init: function() {
    this.appendValueInput("c")
        .setCheck(null)
        .appendField("get character");
    this.appendValueInput("s")
        .setCheck(null)
        .appendField("of string");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_char'] = function(block) {
  var value_c = Blockly.JavaScript.valueToCode(block, 'c', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_s+'.charAt('+value_c+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//String contains
Blockly.Blocks['string_contains'] = {
  init: function() {
    this.appendValueInput("c")
        .setCheck(null)
        .appendField("does string");
    this.appendValueInput("s")
        .setCheck(null)
        .appendField("contain");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_contains'] = function(block) {
  var value_c = Blockly.JavaScript.valueToCode(block, 'c', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_c+'.includes('+value_s+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//search string
Blockly.Blocks['string_search'] = {
  init: function() {
    this.appendValueInput("c")
        .setCheck(null)
        .appendField("search for");
    this.appendValueInput("s")
        .setCheck(null)
        .appendField("in string");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_search'] = function(block) {
  var value_c = Blockly.JavaScript.valueToCode(block, 'c', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_s+'.indexOf('+value_c+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Replace
Blockly.Blocks['string_replace'] = {
  init: function() {
    this.appendValueInput("c")
        .setCheck(null)
        .appendField("replace");
    this.appendValueInput("s")
        .setCheck(null)
        .appendField("with");
    this.appendValueInput("t")
        .setCheck(null)
        .appendField("on string");
    this.appendDummyInput()
        .appendField("all")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_replace'] = function(block) {
  var value_c = Blockly.JavaScript.valueToCode(block, 'c', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_name = block.getFieldValue('NAME') === 'TRUE';
  var code = value_t+'.replace'+(checkbox_name?"All":"")+'('+value_c+','+value_s+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Substring
Blockly.Blocks['string_substring'] = {
  init: function() {
    this.appendValueInput("s")
        .setCheck(null)
        .appendField("substring");
    this.appendValueInput("i1")
        .setCheck(null)
        .appendField("start");
    this.appendValueInput("i2")
        .setCheck(null)
        .appendField("end");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_substring'] = function(block) {
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var value_i1 = Blockly.JavaScript.valueToCode(block, 'i1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_i2 = Blockly.JavaScript.valueToCode(block, 'i2', Blockly.JavaScript.ORDER_ATOMIC);
  var code=value_s+'.substring('+value_i1+','+value_i2+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Change case
Blockly.Blocks['string_case'] = {
  init: function() {
    this.appendValueInput("s")
        .setCheck(null)
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["upper","Upper"], ["lower","Lower"]]), "c")
        .appendField("case");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_case'] = function(block) {
  var dropdown_c = block.getFieldValue('c');
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_s+'.to'+dropdown_c+'Case()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//stringify json
Blockly.Blocks['string_j2s'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("stringify JSON");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_j2s'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'JSON.stringify('+value_v+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//parse json
Blockly.Blocks['string_s2j'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("parse JSON");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['string_s2j'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'JSON.parse('+value_v+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Empty list
Blockly.Blocks['list_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create empty list");
    this.setOutput(true, "Array");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_value'] = function(block) {
return ["[]", Blockly.JavaScript.ORDER_NONE];};
//Add to list
Blockly.Blocks['list_add'] = {
  init: function() {
    this.appendValueInput("list")
        .setCheck("Array")
        .appendField("add to list");
    this.appendValueInput("item")
        .setCheck(null)
        .appendField("item");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_add'] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_item = Blockly.JavaScript.valueToCode(block, 'item', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_list+'.push('+value_item+');\n';
  return code;
};
//Remove from list
Blockly.Blocks['list_remove'] = {
  init: function() {
    this.appendValueInput("list")
        .setCheck("Array")
        .appendField("remove from list");
    this.appendValueInput("index")
        .setCheck(null)
        .appendField("item");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_remove'] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_list+'.splice('+value_index+',1);\n';
  return code;
};
//Get from list
Blockly.Blocks['list_get'] = {
  init: function() {
    this.appendValueInput("list")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("from list");
    this.appendValueInput("index")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("get item");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_get'] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_list+"["+value_index+"]";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Length of list
Blockly.Blocks['list_length'] = {
  init: function() {
    this.appendValueInput("TXT")
        .setCheck("Array")
        .appendField("length");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_length'] = function(block) {
  var value_txt = Blockly.JavaScript.valueToCode(block, 'TXT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_txt+".length";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Set item of list
Blockly.Blocks['list_set'] = {
  init: function() {
    this.appendValueInput("list")
        .setCheck("Array")
        .appendField("set item of list");
    this.appendValueInput("index")
        .setCheck("Number")
        .appendField("index");
    this.appendValueInput("item")
        .setCheck(null)
        .appendField("new value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_set'] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var value_item = Blockly.JavaScript.valueToCode(block, 'item', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_list+'['+value_index+']='+value_item+';\n';
  return code;
};
//List contains
Blockly.Blocks['list_contains'] = {
  init: function() {
    this.appendValueInput("l")
        .setCheck(null)
        .appendField("does list");
    this.appendValueInput("i")
        .setCheck(null)
        .appendField("contain");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_contains'] = function(block) {
  var value_l = Blockly.JavaScript.valueToCode(block, 'l', Blockly.JavaScript.ORDER_ATOMIC);
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_l+'.includes('+value_i+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//List search
Blockly.Blocks['list_search'] = {
  init: function() {
    this.appendValueInput("i")
        .setCheck(null)
        .appendField("search for");
    this.appendValueInput("l")
        .setCheck(null)
        .appendField("in list");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_search'] = function(block) {
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_l = Blockly.JavaScript.valueToCode(block, 'l', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_l+'.indexOf('+value_i+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//List reverse
Blockly.Blocks['list_reverse'] = {
  init: function() {
    this.appendValueInput("l")
        .setCheck(null)
        .appendField("reverse");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_reverse'] = function(block) {
  var value_l = Blockly.JavaScript.valueToCode(block, 'l', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_l+'.reverse()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//List join
Blockly.Blocks['list_join'] = {
  init: function() {
    this.appendValueInput("l")
        .setCheck(null)
        .appendField("join list");
    this.appendValueInput("i")
        .setCheck(null)
        .appendField("separator");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['list_join'] = function(block) {
  var value_l = Blockly.JavaScript.valueToCode(block, 'l', Blockly.JavaScript.ORDER_ATOMIC);
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_l+'.join('+value_i+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Empty dictionary
Blockly.Blocks['dict_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create empty dictionary");
    this.setOutput(true, "Dictionary");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
}};
Blockly.JavaScript['dict_value'] = function(block) {
return ["{}", Blockly.JavaScript.ORDER_NONE];};
//Edit value of dictionary
Blockly.Blocks['dict_set'] = {
  init: function() {
    this.appendValueInput("dict")
        .setCheck("Dictionary")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("edit key of dictionary");
    this.appendValueInput("key")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("key");
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("new value");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['dict_set'] = function(block) {
  var value_dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_dict+'['+value_key+']='+value_value+';\n';
  return code;
};
//Get value from dictionary
Blockly.Blocks['dict_get'] = {
  init: function() {
    this.appendValueInput("dict")
        .setCheck("Dictionary")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("get value of dictionary");
    this.appendValueInput("key")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("key");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['dict_get'] = function(block) {
  var value_dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var code=value_dict+"["+value_key+"]";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get keys from dictionary
Blockly.Blocks['dict_keys'] = {
  init: function() {
    this.appendValueInput("d")
        .setCheck(null)
        .appendField("get keys of dict");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['dict_keys'] = function(block) {
  var value_d = Blockly.JavaScript.valueToCode(block, 'd', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_d+'.keys()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Local variable
Blockly.Blocks['local_variable'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("initialize local variable")
        .appendField(new Blockly.FieldTextInput("myVariable"), "varname")
        .appendField("to");
    this.appendStatementInput("todo")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['local_variable'] = function(block) {
  var text_varname = block.getFieldValue('varname');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var stt = Blockly.JavaScript.statementToCode(block, 'todo');
  var code = 'if(true){let '+text_varname+'='+value_value+';'+stt+'}\n';
  return code;
};
//Set variable
Blockly.Blocks['set_var'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set variable")
        .appendField(new Blockly.FieldTextInput("myVariable"), "varname")
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['set_var'] = function(block) {
  var text_varname = block.getFieldValue('varname');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "var "+text_varname+"="+value_name+';\n';
  return code;
};
//Get variable
Blockly.Blocks['get_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get variable")
        .appendField(new Blockly.FieldTextInput("myVariable"), "varname");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['get_var'] = function(block) {
  var text_varname = block.getFieldValue('varname');
  var code = text_varname;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Define global variable
Blockly.Blocks['def_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("define global variable")
        .appendField(new Blockly.FieldTextInput("myVariable"), "v");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['def_var'] = function(block) {
  var text_varname = block.getFieldValue('v');
  var code = "/*DEFINE "+text_varname+"*/\n";
  return code;
};
//Set game variable
Blockly.Blocks['set_gamevar'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("set game variable")
        .appendField(new Blockly.FieldTextInput("myGameVariable"), "n")
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['set_gamevar'] = function(block) {
  var text_n = block.getFieldValue('n');
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'gamevars["'+text_n.replace('"','\\"')+'"]='+value_v+';\n';
  return code;
};
//Get game variable
Blockly.Blocks['get_gamevar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get game variable")
        .appendField(new Blockly.FieldTextInput("myGameVariable"), "n");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['get_gamevar'] = function(block) {
  var text_n = block.getFieldValue('n');
  var code = 'gamevars["'+text_n+'"]';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//////////////////////////////////////////////////////////////////////////////////////////////////API
//Set loc
Blockly.Blocks['object_setloc'] = {
  init: function() {
    this.appendValueInput("v")
        .appendField("Set location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setloc'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.position.copy('+value_v+');\n';
  return code;
};
//Set X
Blockly.Blocks['object_setxloc'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set X location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setxloc'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.position.x='+value_v+';\n';
  return code;
};
//Set Y
Blockly.Blocks['object_setyloc'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set Y location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setyloc'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.position.y='+value_v+';\n';
  return code;
};
//Set Z
Blockly.Blocks['object_setzloc'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set Z location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setzloc'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.position.z='+value_v+';\n';
  return code;
};
//Get loc
Blockly.Blocks['object_getloc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get location");
    this.setOutput(true);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getloc'] = function(block) {
  var code = 'scope.position';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get X
Blockly.Blocks['object_getxloc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get X location");
    this.setOutput(true, "Number");
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getxloc'] = function(block) {
  var code = 'scope.position.x';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get Y
Blockly.Blocks['object_getyloc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Y location");
    this.setOutput(true, "Number");
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getyloc'] = function(block) {
  var code = 'scope.position.y';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get Z
Blockly.Blocks['object_getzloc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Z location");
    this.setOutput(true, "Number");
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getzloc'] = function(block) {
  var code = 'scope.position.z';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Set loc of
Blockly.Blocks['object_setlocof'] = {
  init: function() {
    this.appendValueInput("v")
        .appendField("Set location");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setlocof'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.position.copy('+value_v+');\n';
  return code;
};
//Set X of
Blockly.Blocks['object_setxlocof'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set X location");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setxlocof'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.position.x='+value_v+';\n';
  return code;
};
//Set Y of
Blockly.Blocks['object_setylocof'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set Y location");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setylocof'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.position.y='+value_v+';\n';
  return code;
};
//Set Z of
Blockly.Blocks['object_setzlocof'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set Z location");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setzlocof'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.position.z='+value_v+';\n';
  return code;
};
//Get loc of
Blockly.Blocks['object_getlocof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get location");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setOutput(true);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getlocof'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.position';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get X of
Blockly.Blocks['object_getxlocof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get X location");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setOutput(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getxlocof'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.position.x';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get Y of
Blockly.Blocks['object_getylocof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Y location");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setOutput(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getylocof'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.position.y';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get Z of
Blockly.Blocks['object_getzlocof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Z location");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setOutput(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getzlocof'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.position.z';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Set rot
Blockly.Blocks['object_setrot'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set rotation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setrot'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.rotation.x='+value_v+'.x;scope.rotation.y='+value_v+'.y;scope.rotation.z='+value_v+'.z;\n';
  return code;
};
//Set X rot
Blockly.Blocks['object_setxrot'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set X rotation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setxrot'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.rotation.x='+value_v+';\n';
  return code;
};
//Set Y rot
Blockly.Blocks['object_setyrot'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set Y rotation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setyrot'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.rotation.y='+value_v+';\n';
  return code;
};
//Set Z rot
Blockly.Blocks['object_setzrot'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set Z rotation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setzrot'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.rotation.z='+value_v+';\n';
  return code;
};
//Get rot
Blockly.Blocks['object_getrot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get rotation");
    this.setOutput(true, "Number");
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getrot'] = function(block) {
  var code = 'scope.rotation';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get X rot
Blockly.Blocks['object_getxrot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get X rotation");
    this.setOutput(true, "Number");
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getxrot'] = function(block) {
  var code = 'scope.rotation.x';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get Y rot
Blockly.Blocks['object_getyrot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Y rotation");
    this.setOutput(true, "Number");
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getyrot'] = function(block) {
  var code = 'scope.rotation.y';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get Z rot
Blockly.Blocks['object_getzrot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Z rotation");
    this.setOutput(true, "Number");
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getzrot'] = function(block) {
  var code = 'scope.rotation.z';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Set rot of
Blockly.Blocks['object_setrotof'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set rotation");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setrotof'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = ''+value_o+'.rotation.x='+value_v+'.x;'+value_o+'.rotation.y='+value_v+'.y;'+value_o+'.rotation.z='+value_v+'.z;\n';
  return code;
};
//Set X rot of
Blockly.Blocks['object_setxrotof'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set X rotation");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setxrotof'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.rotation.x='+value_v+';\n';
  return code;
};
//Set Y rot of
Blockly.Blocks['object_setyrotof'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set Y rotation");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setyrotof'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.rotation.y='+value_v+';\n';
  return code;
};
//Set Z rot of
Blockly.Blocks['object_setzrotof'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck("Number")
        .appendField("Set Z rotation");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setzrotof'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.rotation.z='+value_v+';\n';
  return code;
};
//Get rot of
Blockly.Blocks['object_getrotof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get rotation");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setOutput(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getrotof'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.rotation';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get X rot of
Blockly.Blocks['object_getxrotof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get X rotation");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setOutput(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getxrotof'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.rotation.x';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get Y rot of
Blockly.Blocks['object_getyrotof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Y rotation");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setOutput(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getyrotof'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.rotation.y';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get Z rot of
Blockly.Blocks['object_getzrotof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Z rotation");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setOutput(true, null);
    this.setColour(16);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_getzrotof'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.rotation.z';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Set scale normal
Blockly.Blocks['object_setscl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set scale");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setscl'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.scale.set('+value_x+','+value_y+','+value_z+');\n';
  return code;
};
//Set scale scalar
Blockly.Blocks['object_setscl_scalar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set scale");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("Value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setscl_scalar'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.scale.setScalar('+value_x+');\n';
  return code;
};
//Set scale normal of
Blockly.Blocks['object_setsclof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set scale");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setsclof'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.scale.set('+value_x+','+value_y+','+value_z+');\n';
  return code;
};
//Set scale scalar of
Blockly.Blocks['object_setsclof_scalar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set scale");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("Value");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_setsclof_scalar'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.scale.setScalar('+value_x+');\n';
  return code;
};
//This object
Blockly.Blocks['object_this'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("this object");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_this'] = function(block) {
  return ["scope", Blockly.JavaScript.ORDER_ATOMIC];
};
//The camera
Blockly.Blocks['object_camera'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("active camera");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_camera'] = function(block) {
  return ["dcamera", Blockly.JavaScript.ORDER_ATOMIC];
};
//Object by tag
Blockly.Blocks['object_bytag'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("find object by name");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_bytag'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'findObjectByTag('+value_name+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//set active camera
Blockly.Blocks['object_active_cam'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set active camera to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_active_cam'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'dcamera='+value_name+';dcamera.aspect=window.innerWidth/window.innerHeight;dcamera.updateProjectionMatrix();';
  return code;
};
//look at of
Blockly.Blocks['object_lookat2'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("look at vector");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_lookat2'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.lookAt('+value_v+');\n';
  return code;
};
//look at
Blockly.Blocks['object_lookat'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("look at vector");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_lookat'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scope.lookAt('+value_v+');\n';
  return code;
};
//clone
Blockly.Blocks['object_clone'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("clone object");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_clone'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'smartClone('+value_o+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//add object
Blockly.Blocks['object_add'] = {
  init: function() {
    this.appendValueInput("o2")
        .setCheck(null)
        .appendField("add object");
    this.appendValueInput("o1")
        .setCheck(null)
        .appendField("to object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_add'] = function(block) {
  var value_o2 = Blockly.JavaScript.valueToCode(block, 'o2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o1 = Blockly.JavaScript.valueToCode(block, 'o1', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o1+'.add('+value_o2+');\n';
  return code;
};
//remove object
Blockly.Blocks['object_remove'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("remove object from its parent");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_remove'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.removeFromParent();\n';
  return code;
};
//get parent
Blockly.Blocks['object_parent'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("get parent of");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_parent'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.parent';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//get children
Blockly.Blocks['object_children'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("get children of");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_children'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.children';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//get scene
Blockly.Blocks['object_scene'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("the scene");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_scene'] = function(block) {
  var code = 'dfbgs';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//set object visibility
Blockly.Blocks['object_visibility'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("set visibility");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("of object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_visibility'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.visible='+value_v+';\n';
  return code;
};
//get object visibility
Blockly.Blocks['object_visibility_get'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("get visibility of object");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_visibility_get'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.visible';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Vector3
Blockly.Blocks['vec3d_value'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck(null)
        .appendField("Z");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['vec3d_value'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'new THREE.Vector3('+value_x+','+value_y+','+value_z+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Vector2
Blockly.Blocks['vec2d_value'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("Y");
    this.setOutput(true, null);
    this.setColour(210);
    this.setInputsInline(true);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['vec2d_value'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'new THREE.Vector2('+value_x+','+value_y+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Add vectors
Blockly.Blocks['vec_add'] = {
  init: function() {
    this.appendValueInput("v1")
        .setCheck(null)
        .appendField("Add vectors");
    this.appendValueInput("v2")
        .setCheck(null)
        .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['vec_add'] = function(block) {
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'vecOperation('+value_v1+','+value_v2+',"add")';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Sub vectors
Blockly.Blocks['vec_sub'] = {
  init: function() {
    this.appendValueInput("v1")
        .setCheck(null)
        .appendField("Subtract vectors");
    this.appendValueInput("v2")
        .setCheck(null)
        .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['vec_sub'] = function(block) {
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'vecOperation('+value_v1+','+value_v2+',"sub")';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Multiply vectors
Blockly.Blocks['vec_mul'] = {
  init: function() {
    this.appendValueInput("v1")
        .setCheck(null)
        .appendField("Multiply vectors");
    this.appendValueInput("v2")
        .setCheck(null)
        .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['vec_mul'] = function(block) {
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'vecOperation('+value_v1+','+value_v2+',"mul")';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Divide vectors
Blockly.Blocks['vec_div'] = {
  init: function() {
    this.appendValueInput("v1")
        .setCheck(null)
        .appendField("Divide vectors");
    this.appendValueInput("v2")
        .setCheck(null)
        .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['vec_div'] = function(block) {
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'vecOperation('+value_v1+','+value_v2+',"div")';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//get vector value
Blockly.Blocks['vec_getv'] = {
  init: function() {
    this.appendValueInput("v1")
        .setCheck(null)
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["X","x"], ["Y","y"], ["Z","z"]]), "t")
        .appendField("of vector");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['vec_getv'] = function(block) {
  var dropdown_t = block.getFieldValue('t');
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_v1+'.'+dropdown_t;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//set vector value
Blockly.Blocks['vec_setv'] = {
  init: function() {
    this.appendValueInput("v1")
        .setCheck(null)
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["X","x"], ["Y","y"], ["Z","z"]]), "t")
        .appendField("of vector");
    this.appendValueInput("v2")
        .setCheck(null)
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['vec_setv'] = function(block) {
  var dropdown_t = block.getFieldValue('t');
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_v1+'.'+dropdown_t+'=('+value_v2+');\n';
  return code;
};
//get vectors distance
Blockly.Blocks['vec_dist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get distance");
    this.appendValueInput("v1")
        .setCheck(null)
        .appendField("of vectors");
    this.appendValueInput("v2")
        .setCheck(null)
        .appendField("and");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['vec_dist'] = function(block) {
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var code=value_v1+'.distanceTo('+value_v2+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//On start
Blockly.Blocks['on_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On game start");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['on_start'] = function(block) {
var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
var code = 'if(firstrun){'+statements_do+'}\n';
return code;
};
//on key pressed
Blockly.Blocks['on_keydown'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("On specific key pressed");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['on_keydown'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  let k="k"+String(Math.round(Math.random()*1000));
  var code = 'onKeyPress(function('+k+'){if('+k+'=='+value_name+'){\n'+statements_do+'\n}});\n';
  return code;
};
//on key released
Blockly.Blocks['on_keyup'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("On specific key released");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['on_keyup'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  let k="k"+String(Math.round(Math.random()*1000));
  var code = 'onKeyUnpress(function('+k+'){if('+k+'=='+value_name+'){\n'+statements_do+'\n}});\n';
  return code;
};
//on mouse click

//is key being pressed
Blockly.Blocks['in_key'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("is key pressed");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['in_key'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'isKeyPressed('+value_name+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//get all pressed keys
Blockly.Blocks['in_allkeys'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get all pressed keys");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['in_allkeys'] = function(block) {
  var code = 'getPressedKeys()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//is mouse/finger down
Blockly.Blocks['in_mousedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is mouse down");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['in_mousedown'] = function(block) {
  var code = 'touch.m';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//mouse hovering this
Blockly.Blocks['in_mousehover'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is mouse hovering this object");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['in_mousehover'] = function(block) {
  var code = 'touch.o==scope';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//mouse hovering object
Blockly.Blocks['in_mousehover_on'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("is mouse hovering on object");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['in_mousehover_on'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'touch.o==('+value_o+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Get hovered object
Blockly.Blocks['in_hoverobject'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get the object being hovered");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['in_hoverobject'] = function(block) {
  var code = 'touch.o';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Websocket
Blockly.Blocks['net_ws'] = {
  init: function() {
    this.appendValueInput("addr")
        .setCheck("String")
        .appendField("Connect to websocket");
    this.appendStatementInput("onOpen")
        .setCheck(null)
        .appendField("on open");
    this.appendStatementInput("onClose")
        .setCheck(null)
        .appendField("on close");
    this.appendStatementInput("onMessage")
        .setCheck(null)
        .appendField("on data");
    this.appendStatementInput("on Error")
        .setCheck(null)
        .appendField("on error");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['net_ws'] = function(block) {
  var value_addr = Blockly.JavaScript.valueToCode(block, 'addr', Blockly.JavaScript.ORDER_ATOMIC);
  var s1 = Blockly.JavaScript.statementToCode(block, 'onOpen');
  var s2 = Blockly.JavaScript.statementToCode(block, 'onClose');
  var s3 = Blockly.JavaScript.statementToCode(block, 'onMessage');
  var s4 = Blockly.JavaScript.statementToCode(block, 'on Error');
  var code = 'websocket=new WebSocket('+value_addr+');websocket.onopen=function(){'+s1+'};websocket.onclose=function(){'+s2+'};websocket.onmessage=function(m){let WSMESSAGE=String(m.data);'+s3+'};websocket.onerror=function(err){'+s4+'};\n';
  return code;
};
//Websocket send
Blockly.Blocks['net_wssend'] = {
  init: function() {
    this.appendValueInput("s")
        .setCheck(null)
        .appendField("Send to websocket");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['net_wssend'] = function(block) {
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'websocket.send(String('+value_s+'));\n';
  return code;
};
Blockly.Blocks['net_msg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("message");
    this.setOutput(true, "String");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['net_msg'] = function(block) {
  var code = 'WSMESSAGE';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//HTTP request
Blockly.Blocks['net_http'] = {
  init: function() {
    this.appendValueInput("url")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["GET","GET"], ["POST","POST"]]), "NAME")
        .appendField("HTTP");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("on response");
    this.appendStatementInput("err")
        .setCheck(null)
        .appendField("on error");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['net_http'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var statements_err = Blockly.JavaScript.statementToCode(block, 'err');
  let reqid="req"+String(Math.round(Math.random()*10000));
  var code = 'let '+reqid+'=new XMLHttpRequest();\n'+reqid+'.addEventListener("load",function(){if(this.status==200){'+statements_do+'\n}else{'+statements_err+'\n}});'+reqid+'.open("'+dropdown_name+'",'+value_url+');\n'+reqid+'.send();\n';
  return code;
};
Blockly.Blocks['net_http_response'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HTTP response text");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['net_http_response'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HTTP response text");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['net_http_response'] = function(block) {
  var code = 'this.responseText';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Capsule collider for
Blockly.Blocks['coll_capsule_for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Capsule collider");
    this.appendValueInput("h")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Height");
    this.appendValueInput("r")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Radius");
    this.appendValueInput("o")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("for object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['coll_capsule_for'] = function(block) {
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'addCapsuleTo('+value_h+','+value_r+','+value_o+');\n';
  return code;
};
//Create octree for
Blockly.Blocks['coll_octree_create_for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create octree");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("for object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['coll_octree_create_for'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createOctree('+value_o+');\n';
  return code;
};
//Check collision capsule with octree
Blockly.Blocks['coll_capsulewithoctree'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Check if collide");
    this.appendValueInput("o1")
        .setCheck(null)
        .appendField("capsule of object");
    this.appendValueInput("o2")
        .setCheck(null)
        .appendField("with octree of object");
    this.appendDummyInput()
        .appendField("then")
        .appendField(new Blockly.FieldDropdown([["Collide","y"], ["Do nothing","wat"]]), "do");
    this.setOutput(true, "Boolean");
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setInputsInline(false);
  }
};
Blockly.JavaScript['coll_capsulewithoctree'] = function(block) {
  var value_o1 = Blockly.JavaScript.valueToCode(block, 'o1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_o2 = Blockly.JavaScript.valueToCode(block, 'o2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_do = block.getFieldValue('do');
  var code = 'checkCollision_CO('+value_o1+'.userData.capsule,'+value_o2+'.userData.octree,'+value_o1+','+value_o2+','+(dropdown_do=="y")+')';
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Capsule direction
Blockly.Blocks['coll_dir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get collided direction");
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("capsule of object");
    this.setOutput(true, "Boolean");
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setInputsInline(false);
  }
};
Blockly.JavaScript['coll_dir'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.userData.capsuleDir';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Material of object
Blockly.Blocks['mat_get'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("material of object");
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['mat_get'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.material';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Set material
Blockly.Blocks['mat_set'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck(null)
        .appendField("set material of object");
    this.appendValueInput("m")
        .setCheck(null)
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['mat_set'] = function(block) {
  var value_o = Blockly.JavaScript.valueToCode(block, 'o', Blockly.JavaScript.ORDER_ATOMIC);
  var value_m = Blockly.JavaScript.valueToCode(block, 'm', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_o+'.material='+value_m+';\n';
  return code;
};
//Create material
Blockly.Blocks['mat_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("new")
        .appendField(new Blockly.FieldDropdown([["plain","MeshBasicMaterial"], ["realistic","MeshStandardMaterial"]]), "m")
        .appendField("material");
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['mat_value'] = function(block) {
  var dropdown_m = block.getFieldValue('m');
  var code = 'new THREE.'+dropdown_m+'({envMap:env})';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Set property of material
Blockly.Blocks['mat_setprop'] = {
  init: function() {
    this.appendValueInput("m")
        .setCheck(null)
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["color","color"], ["metalness","metalness"], ["roughness","roughness"], ["opacity","opacity"]]), "d")
        .appendField("of material");
    this.appendValueInput("p")
        .setCheck(null)
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['mat_setprop'] = function(block) {
  var dropdown_d = block.getFieldValue('d');
  var value_m = Blockly.JavaScript.valueToCode(block, 'm', Blockly.JavaScript.ORDER_ATOMIC);
  var value_p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_m+'.'+dropdown_d+'='+value_p+';\n'+value_m+'.transparent='+value_m+'.opacity<1;\n'+value_m+'.needsUpdate=true;\n';
  return code;
};
//Get material property
Blockly.Blocks['mat_getprop'] = {
  init: function() {
    this.appendValueInput("m")
        .setCheck(null)
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["color","color"], ["reflectivity","reflectivity"], ["shininess","shininess"], ["metalness","metalness"], ["roughness","roughness"], ["clearcoat","clearcoat"], ["clearcoat roughness","clearcoatRoughness"], ["opacity","opacity"]]), "d")
        .appendField("of material");
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['mat_getprop'] = function(block) {
  var dropdown_d = block.getFieldValue('d');
  var value_m = Blockly.JavaScript.valueToCode(block, 'm', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_m+'.'+dropdown_d;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Color from hex
Blockly.Blocks['color_hex'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("color from hex");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['color_hex'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'new THREE.Color('+value_v+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Color from RGB
Blockly.Blocks['color_rgb'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("color from RGB");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['color_rgb'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'new THREE.Color("rgb("+String('+value_v+'.x)+","+String('+value_v+'.y)+","+String('+value_v+'.z)+")")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Color from HSL
Blockly.Blocks['color_hsl'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("color from HSL");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['color_hsl'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'new THREE.Color("hsl("+String('+value_v+'.x)+","+String('+value_v+'.y)+"%,"+String('+value_v+'.z)+"%)")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Color from Blockly
Blockly.Blocks['color_blockly'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("color from")
        .appendField(new Blockly.FieldColour("#ff0000"), "c");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['color_blockly'] = function(block) {
  var colour_c = block.getFieldValue('c');
  var code = 'new THREE.Color("'+colour_c+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//Log to console
Blockly.Blocks['dev_log'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Log");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(94);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['dev_log'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.log('+value_name+');\n';
  return code;
};
//Mobile
Blockly.Blocks['dev_ismobile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is mobile");
    this.setOutput(true, null);
    this.setColour(94);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['dev_ismobile'] = function(block) {
  var code = 'mobile';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Javascript command
Blockly.Blocks['js_com'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("//"), "c");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['js_com'] = function(block) {
  return block.getFieldValue('c');
};
//Javascript reporter
Blockly.Blocks['js_rep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("/**/"), "c");
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['js_rep'] = function(block) {
  return [block.getFieldValue('c'), Blockly.JavaScript.ORDER_ATOMIC];
};
//Javascript joiner
Blockly.Blocks['js_joiner'] = {
  init: function() {
    this.appendValueInput("e1")
        .setCheck(null);
    this.appendValueInput("e2")
        .setCheck(null)
        .appendField(".");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['js_joiner'] = function(block) {
  var value_e1 = Blockly.JavaScript.valueToCode(block, 'e1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_e2 = Blockly.JavaScript.valueToCode(block, 'e2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_e1+'.'+value_e2;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Javascript setter
Blockly.Blocks['js_setter'] = {
  init: function() {
    this.appendValueInput("e1")
        .setCheck(null);
    this.appendValueInput("e2")
        .setCheck(null)
        .appendField("=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['js_setter'] = function(block) {
  var value_e1 = Blockly.JavaScript.valueToCode(block, 'e1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_e2 = Blockly.JavaScript.valueToCode(block, 'e2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_e1+'='+value_e2+';';
  return code;
};
//Javascript thing...??
Blockly.Blocks['js_thing'] = {
  init: function() {
    this.appendValueInput("b")
        .setCheck(null);
    this.appendValueInput("e1")
        .setCheck(null)
        .appendField("?");
    this.appendValueInput("e2")
        .setCheck(null)
        .appendField(":");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['js_thing'] = function(block) {
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var value_e1 = Blockly.JavaScript.valueToCode(block, 'e1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_e2 = Blockly.JavaScript.valueToCode(block, 'e2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_b+'?'+value_e1+':'+value_e2;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//Javascript try
Blockly.Blocks['js_try'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("try");
    this.appendStatementInput("try")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['js_try'] = function(block) {
  var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
  var code = 'try{'+statements_try+'}catch(ok_){};\n';
  return code;
};
//Javascript try-catch
Blockly.Blocks['js_trycatch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("try");
    this.appendStatementInput("try")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("error");
    this.appendStatementInput("catch")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['js_trycatch'] = function(block) {
  var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
  var statements_catch = Blockly.JavaScript.statementToCode(block, 'catch');
  var code = 'try{'+statements_try+'}catch(E___________){'+statements_catch+'};\n';
  return code;
};
//Scene set
Blockly.Blocks['object_sceneset'] = {
  init: function() {
    this.appendValueInput("s")
        .setCheck(null)
        .appendField("Switch to scene");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['object_sceneset'] = function(block) {
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'switchScene('+value_s+');\n';
  return code;
};
//Audio play
Blockly.Blocks['audio_play'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck(null)
        .appendField("play sound");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(69);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['audio_play'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'playSound('+value_a+');\n';
  return code;
};
