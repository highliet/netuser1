const code = `
 <h1>HTML Introduction</h1>
 <div class="bookmark">
  <h2>Go to: </h2>
  <ul>
   <li><a href="#intro">Intro</a></li>
   <li><a href="#ex1">Web Page Example</a></li>
   <li><a href="#aboutex">In the <abbr tooltip="Web Page">WP</abbr> Example</a></li>
   <li>
    <a href="#twotags" class="noafter">Opening and Closing Tags</a>
    <p>What happens if...</p>
    <ol class="children" type="a">
     <li><a href="#endtag">...we do not use the end tag?</a></li>
     <ol class="children">
      <li><a href="#etex1">Example A</a></li>
      <li><a href="#etex2">Example B</a></li>
     </ol>
     <li><a href="#endtagee">...we use the end tag for an empty element?</a></li>
     <ol class="children">
      <li><a href="#eteex1">Example A</a></li>
      <li><a href="#eteex2">Example B</a></li>
     </ol>
    </ol></li>
  </ul></div>
 <h2 id="intro">Intro</h2>
 <div class="content">
  <img src="../assets/html.png" alt="HTML Logo" class="icon" />
  <ul>
   <li>HTML is the standard language for making web pages. </li>
   <li>It stands for <b>H</b>yper<b>t</b>ext <b>M</b>arkup <b>L</b>anguage. </li>
   <li>With <b>HTML</b>, you can create your own website. </li>
   <li>HTML tells the browser how to display the content. </li>
   <li>Some commonly used elements are <codespan>&lt;h1&gt;</codespan>, <codespan>&lt;div&gt;</codespan>, <codespan>&lt;span&gt;</codespan>, etc.</li>
  </ul>
 </div>
 <div id="ex1" class="content excon">
  <h3>Example</h3>
  <textarea id="example1" hidden><!DOCTYPE html>
<html lang="en">
<head>
 <title>My Web Page</title>
</head>
<body>
 <h1>Heading</h1>
 <p>Paragraph</p>
</body>
</html></textarea>
  <code>
   <line><font color="grey">&lt;!DOCTYPE html&gt;</font></line>
   <line><font color="purple">&lt;html <font color="brown">lang</font>="<font color="mediumblue">en</font>"&gt;</font></line>
   <line><font color="purple">&lt;head&gt;</font></line>
   <line>
    &nbsp;<font color="purple">&lt;title&gt;</font>My Web Page<font color="purple">&lt;/title&gt;</font>
   </line>
   <line><font color="purple">&lt;/head&gt;</font></line>
   <line><font color="purple">&lt;body&gt;</font></line>
   <line>
    &nbsp;<font color="purple">&lt;h1&gt;</font>Heading<font color="purple">&lt;/h1&gt;</font>
   </line>
   <line>
    &nbsp;<font color="purple">&lt;p&gt;</font>Paragraph<font color="purple">&lt;/p&gt;</font>
   </line>
   <line><font color="purple">&lt;/body&gt;</font></line>
   <line><font color="purple">&lt;/html&gt;</font></line>
  </code><br />
  <a href="./testlab/index.html?pg=1&id=example1" role="button"><icon class="fa fa-share"></icon> Test it Now </a>
  <button id="copyex1"><icon class="fa fa-copy"></icon> Copy Code</button>
 </div>
 <div class="separator"></div>
 <h3 id="aboutex">In the above example: </h3>
 <div class="content"><ul>
  <li><codespan>&lt;!DOCTYPE html&gt;</codespan> tells the browser that the webpage is <abbr tooltip="Latest version of HTML">HTML5</abbr>.</li>
  <li><codespan>&lt;html&gt;</codespan> is the root (main) element of the webpage.</li>
  <li><codespan>lang="en"</codespan> tells that the language of the webpage is the value of the attribute. Here the language of the webpage is English.</li>
  <li><codespan>&lt;head&gt;</codespan> stores the metadata of the webpage.</li>
  <li><codespan>&lt;title&gt;</codespan> sets a title for your webpage and shows it in browser tab or browser header.</li>
  <li><codespan>&lt;body&gt;</codespan> is the area that is visible to the webpage and the main part where other elements are written.</li>
  <li><codespan>&lt;h1&gt;</codespan> is the heading of your webpage in the level 1 (highest level).</li>
  <li><codespan>&lt;p&gt;</codespan> is the paragraph of your webpage.</li>
 </ul></div>
 <img src="../assets/html-structure.png" alt="HTML Structure" class="imgauto" />
 <div class="separator"></div>
 <h2 id="twotags">Opening and Closing Tags</h2>
 <p>In the example1, you may have seen two same tags which seems little different just because of a slash (/). </p>
 <code>
  <line><font color="purple">&lt;p&gt;</font>Paragraph<font color="purple">&lt;/p&gt;</font></line>
 </code>
 <p>This is because one without a slash <codespan>&lt;p&gt;</codespan> is an opening (starting) tag and another with a slash <codespan>&lt;/p&gt;</codespan> is a closing (ending) tag. The content between the opening and the closing tag is called element content and the whole is called element.</p>
 <div class="separator"></div>
 <h3>What happens if: </h3>
 <h4 id="endtag">1. ...we do not use the end tag?</h4>
 <p style="margin-top:10px;">It may cause problems and may get mixed up with the another element.</p>
 <p>Look at this example A.</p>
 <div id="etex1" class="content excon">
  <h5>Example A</h5>
  <code>
   <line>...</line>
   <line><font color="purple">&lt;h1&gt;</font>My Website Heading</line>
   <line><font color="purple">&lt;</font><font color="red">p&gt;My Website Paragraph</font></line>
   <line>...</line>
  </code><br />
  <a href="./testlab/index.html?pg=1&id=example2" role="button"><icon class="fa fa-share"></icon> Test it Now </a>
  <button id="copyex1"><icon class="fa fa-copy"></icon> Copy Code</button>
 </div>
 <p>It still looks well because it do not show any sign.</p>
 <p style="margin-top:10px;">Now look at this example B.</p>
 <div id="etex2" class="content excon">
  <h5>Example B</h5>
  <code>
   <line>...</line>
   <line><font color="purple">&lt;a <font color="brown">href</font>="<font color="mediumblue">https://codeprime.io</font>"&gt;</font>My Website Link</line>
   <line><font color="purple">&lt;</font><font color="red">p&gt;My Website Paragraph</font></line>
   <line>...</line>
  </code><br />
  <a href="./testlab/index.html?pg=1&id=example3" role="button"><icon class="fa fa-share"></icon> Test it Now </a>
  <button id="copyex1"><icon class="fa fa-copy"></icon> Copy Code</button>
 </div>
 <p style="margin-bottom:10px;">So, <strong style="color:red;">never</strong> skip end tags, otherwise it will damage your whole webpage. </p>
 <div class="separator"></div>
 <h4 id="endtagee">2. ...we use the end tag for an empty element?</h4>
 <p style="margin-top:10px;">Nothing happens to the webpage but the code looks awkward.</p>
 <p>Look at the example A. </p>
 <div id="eteex1" class="content excon">
  <h5>Example A</h5>
  <code>
   <line>...</line>
   <line><font color="purple">&lt;img <font color="brown">src</font>="<font color="mediumblue">/example.png</font>"&gt;&lt;/img&gt;</font></line>
   <line>...</line>
  </code><br />
  <a href="./testlab/index.html?pg=1&id=example4" role="button"><icon class="fa fa-share"></icon> Test it Now </a>
  <button id="copyex1"><icon class="fa fa-copy"></icon> Copy Code</button>
 </div>
 <p>Instead use a slash in the opening tag to make the element closed. </p>
 <p>The closed element for empty element is <strong>not required</strong> in HTML, but <strong>100% required</strong> in XML! However, it is recommended to close element in HTML.</p>
 <p style="margin-top:10px;">Look at the example B.</p>
 <div id="eteex2" class="content excon">
  <h5>Example B</h5>
  <code>
   <line>...</line>
   <line><font color="purple">&lt;img <font color="brown">src</font>="<font color="mediumblue">/example.png</font>" /&gt;</font></line>
   <line>...</line>
  </code><br />
  <a href="./testlab/index.html?pg=1&id=example4" role="button"><icon class="fa fa-share"></icon> Test it Now </a>
  <button id="copyex1"><icon class="fa fa-copy"></icon> Copy Code</button>
 </div>
 <div class="notice warning">
  <strong>Note:</strong> The closed element (<codespan>&lt;element /&gt;</codespan>) only works on empty elements and not on content-one element (<codespan>&lt;element&gt;<i>content</i>&lt;/element&gt;</codespan>) in some browsers. Maybe in future, it may support.
 </div>
 <!-- END -->
`;

window.load(code, document.querySelector('.content'));
