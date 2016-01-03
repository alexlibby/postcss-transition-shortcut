# PostCSS Transition Shortcut

<p><a href="https://github.com/alexlibby/postcss-transition-shortcut">PostCSS Transform Shortcut</a> is a <a href="https://github.com/postcss/postcss">PostCSS</a> plugin that allows you to use shorthand transition properties in CSS, following the <a href="http://drafts.csswg.org/css-transitions-2/">CSS Transform Module Level 2 Specification</a>.</p>

<div class="highlight highlight-source-css"><pre><span class="pl-c">/* before */</span>

<span class="pl-e">.div</span> {
    <span class="pl-c1"><span class="pl-c1">property</span></span>: all;
    <span class="pl-c1">duration</span>: <span class="pl-c1">1s</span>;
    <span class="pl-c1">timing</span>: <span class="pl-c1">ease-in-out</span>;
    <span class="pl-c1">delay</span>: <span class="pl-c1">1s</span>;
}

<span class="pl-c">/* after */</span>

<span class="pl-e">.div</span> {
    <span class="pl-c1"><span class="pl-c1">transition</span></span>: all 1s ease-in-out 1s</span>;
}
</pre></div>

<p>The <code>property</code>, <code>duration</code>, <code>timing</code>, and <code>delay</code> properties allow authors to specify simple transitions independently, in a way that maps to typical user interface usage, rather than having to remember the order in transform that keeps the actions of <code>transition-property</code>, <code>transition-duration</code>, <code>transition-timming</code> and <code>transition-delay</code>.</p>

<p>The <code>property</code> attribute maps to the CSS3 <code>transition-property</code>, and specifies the name of an element to which the transition effect should be applied.</p>

<p>The <code>duration</code> attribute maps to the CSS3 <code>transition-duration</code>, and specifies how many seconds (s) or milliseconds (ms) a transition should take to complete.</p>

<p>The <code>timing</code> attribute maps to the CSS3 <code>transition-timing-function</code>, and specifies the speed curve of the transition effect.</p>

<p>The <code>delay</code> attribute maps to the CSS3 <code>transition-delay</code>, and specifies the delay that should elapse before the animation starts.</p>


</article>
