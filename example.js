
var test_click = () => {
    var JS_LIb = "function do_something() {\n" +
        "  window.alert('abc');\n" +
        "}";

    var Py_Lib = "def do_something():\n" +
        "  print('abc')\n";


    var XML1 = "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n" +
        "  <block type=\"procedures_defnoreturn\" id=\"7]/bt}?JtN^wr[n`2HYh\" x=\"87\" y=\"63\">\n" +
        "    <field name=\"NAME\">do something</field>\n" +
        "    <comment pinned=\"false\" h=\"80\" w=\"160\">Describe this function...</comment>\n" +
        "    <statement name=\"STACK\">\n" +
        "      <block type=\"text_print\" id=\"LUH2Qe}XSv(5-VNzAabG\">\n" +
        "        <value name=\"TEXT\">\n" +
        "          <shadow type=\"text\" id=\"WU*V^HGF5nwRDnG.`4)T\">\n" +
        "            <field name=\"TEXT\">abc</field>\n" +
        "          </shadow>\n" +
        "          <block type=\"text\" id=\"Zt%iaA(dbGrm86yVp?Cx\">\n" +
        "            <field name=\"TEXT\">abc</field>\n" +
        "          </block>\n" +
        "        </value>\n" +
        "      </block>\n" +
        "    </statement>\n" +
        "  </block>\n" +
        "  <block type=\"procedures_callnoreturn\" id=\"4H:ciX{do|/zn|OfXsKc\" x=\"88\" y=\"213\">\n" +
        "    <mutation name=\"do something\"></mutation>\n" +
        "    <next>\n" +
        "      <block type=\"controls_if\" id=\"Zjwb![qNjWvKeS$I~3;a\">\n" +
        "        <value name=\"IF0\">\n" +
        "          <block type=\"logic_compare\" id=\"7i{$%FQ3Tzps@6,M;JE5\">\n" +
        "            <field name=\"OP\">EQ</field>\n" +
        "            <value name=\"A\">\n" +
        "              <block type=\"math_number\" id=\"pNsvN0Lq+Fv|dtE,ve_/\">\n" +
        "                <field name=\"NUM\">123</field>\n" +
        "              </block>\n" +
        "            </value>\n" +
        "            <value name=\"B\">\n" +
        "              <block type=\"math_arithmetic\" id=\"]u14f7Am.O!e0.qI+VR^\">\n" +
        "                <field name=\"OP\">ADD</field>\n" +
        "                <value name=\"A\">\n" +
        "                  <shadow type=\"math_number\" id=\"V+Niv8S/crQan1*0^G}o\">\n" +
        "                    <field name=\"NUM\">1</field>\n" +
        "                  </shadow>\n" +
        "                </value>\n" +
        "                <value name=\"B\">\n" +
        "                  <shadow type=\"math_number\" id=\"|QoyclSzwIK;=XJ.51du\">\n" +
        "                    <field name=\"NUM\">1</field>\n" +
        "                  </shadow>\n" +
        "                </value>\n" +
        "              </block>\n" +
        "            </value>\n" +
        "          </block>\n" +
        "        </value>\n" +
        "        <statement name=\"DO0\">\n" +
        "          <block type=\"text_print\" id=\"t{WHd=sITJCl@k,XMr`4\">\n" +
        "            <value name=\"TEXT\">\n" +
        "              <shadow type=\"text\" id=\"Hws=WK7(TMzlkj[Ek]N[\">\n" +
        "                <field name=\"TEXT\">abc</field>\n" +
        "              </shadow>\n" +
        "              <block type=\"text\" id=\"CH89@UXb$U!dA+[4aBXv\">\n" +
        "                <field name=\"TEXT\">hi</field>\n" +
        "              </block>\n" +
        "            </value>\n" +
        "          </block>\n" +
        "        </statement>\n" +
        "      </block>\n" +
        "    </next>\n" +
        "  </block>\n" +
        "</xml>";


    FileToBLK("text.xml", XML1, false);
    FileToBLK("text.js", JS_LIb, true);
    FileToBLK("text.py", Py_Lib, true);

    CreateBLK("cy");
    ClearBLK();
}
