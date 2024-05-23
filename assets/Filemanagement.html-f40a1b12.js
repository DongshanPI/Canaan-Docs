import{_ as a,o as n,c as s,e}from"./app-93907a86.js";const t={},i=e(`<h1 id="文件管理类命令" tabindex="-1"><a class="header-anchor" href="#文件管理类命令" aria-hidden="true">#</a> 文件管理类命令</h1><h2 id="ls命令" tabindex="-1"><a class="header-anchor" href="#ls命令" aria-hidden="true">#</a> ls命令</h2><blockquote><p>可以使用ls --help去看官方的说明。用于查看当前目录下的 目录 文件详细参数等信息。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看当然目前目录下的所有文件，以及文件夹，（不包含隐藏文件）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看当然目前目录下的所有文件，以及文件夹，的详细属性信息。（不包含隐藏文件）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看当然目前目录下的所有文件，以及文件夹，（包含隐藏文件）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> DIR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看DIR(目标目录)下的所有文件，（不包含隐藏文件）。 后面加同等的 ls 参数，比如 <code>ls Desktop -la</code> 就是查看 Desktop目录下的所有文件夹 文件 以及所有的隐藏文件还有详细的属性信息等。</p><h2 id="cd-命令" tabindex="-1"><a class="header-anchor" href="#cd-命令" aria-hidden="true">#</a> cd 命令：</h2><blockquote><p>可以使用 cd --help去查看官方说明。 改变shell工作目录。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> DIR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入（切换）到DIR目标目录下。比如使用 <code>cd Desktop</code> 进入到Desktop目录下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换到上次执行cd DIR目录内。 举例，首先在 <code>~</code> 目录，之后我们使用<code>cd Desktop</code>进入到Desktop目录下，然后使用<code>cd -</code>命令直接切换回 <code>~</code>加目录下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token builtin class-name">.</span>        //表示进入到当前目录
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>       //表示切换到上一级目录
<span class="token builtin class-name">cd</span>  <span class="token punctuation">..</span>/<span class="token punctuation">..</span>   //表示切换到 上上级目录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cp命令" tabindex="-1"><a class="header-anchor" href="#cp命令" aria-hidden="true">#</a> cp命令：</h2><blockquote><p>可以使用 cp --help去查看官方说明。将指定的&lt;源文件&gt;复制至&lt;目标文件&gt;，或将多个&lt;源文件&gt;复制至&lt;目标目录&gt;。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-r</span> DIR1 DIR1   //复制DIR1目录到DIR2目录
<span class="token function">cp</span> file1 file2	  //复制file1文件到file2
<span class="token function">cp</span> <span class="token parameter variable">-d</span> <span class="token function">link</span> DIR    //复制一个链接文件到DIR目录内
<span class="token function">cp</span> <span class="token parameter variable">-p</span> file1 file3 //复制file1文件及所有属性到file3
<span class="token function">cp</span> <span class="token parameter variable">-f</span> 				//强制复制 某个文件或者文件夹
<span class="token function">cp</span> <span class="token parameter variable">-v</span> 				//显示复制的详细信息等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mv命令" tabindex="-1"><a class="header-anchor" href="#mv命令" aria-hidden="true">#</a> mv命令</h2><blockquote><p>可以使用mv --help命令查看官方说明，将&lt;源文件&gt;重命名为&lt;目标文件&gt;，或将源文件移动至指定&lt;目录&gt;。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> file1 file2  //将file1重命名为file2
<span class="token function">mv</span> dir1 dir2	//将dir1重命名为dir2
<span class="token function">mv</span> file1 dir2	//将file1移动至dir2目录内。
<span class="token function">mv</span> dir2 dir1/	//将dir2目录移动至dir1目录内。
<span class="token function">mv</span> <span class="token parameter variable">-f</span> 			//强行移动或重命名操作。
<span class="token function">mv</span> <span class="token parameter variable">-v</span> 			//显示移动或者重命名等操作的详细信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pwd命令" tabindex="-1"><a class="header-anchor" href="#pwd命令" aria-hidden="true">#</a> pwd命令</h2><p>打印当前工作目录的完整路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>				//显示完整的目录路径。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mkdir命令" tabindex="-1"><a class="header-anchor" href="#mkdir命令" aria-hidden="true">#</a> mkdir命令</h2><p>创建一个或多个不存在的 目录，或者在某个目录下创建目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> dir1  	//创建一个dir1目录
<span class="token function">mkdir</span> dir1 dir2 //创建一个dir1 dir2目录
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> dir1/dir1.1  //在dir1目录下创建一个 dir1.1目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rmdir 删除一个dir目录或者多个dir目录，前提要求 dir目录下没有文件。</p><h2 id="chown" tabindex="-1"><a class="header-anchor" href="#chown" aria-hidden="true">#</a> chown</h2><blockquote><p>用于设置文件所有者和文件关联组的命令。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$  <span class="token function">chown</span> root:root  test.txt  //修改这个文件的用户组和用户ID。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$  <span class="token function">chown</span>  <span class="token parameter variable">-R</span> root:root ./*  //修改这个目录下所有文件及文件夹的用户组和用户ID。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="touch" tabindex="-1"><a class="header-anchor" href="#touch" aria-hidden="true">#</a> touch</h2><blockquote><p>用于修改文件或者目录的时间属性，或者创建一个新的文件。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">touch</span> file1.txt  //修改这个文件的时间，如果文件不存在则创建一个文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h2><blockquote><p>用于显示文件类型等详细信息。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">file</span> file.txt  	//用于显示这个文件的详细类型信息。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">file</span> <span class="token parameter variable">-i</span> file.txt  	//用于显示这个文件的MIME类别。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>##　chmod命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$  <span class="token function">chmod</span> ugo+x test.sh  //给这个文件增加所有用户的可执行权限。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$  <span class="token function">chmod</span> a+x test.sh  //给这个文件增加所有用户的可执行权限。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$  <span class="token function">chmod</span> a-x test.sh  //给这个文件移除所有用户的可执行权限。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$  <span class="token function">chmod</span> <span class="token number">755</span> test.sh   //给这个文件user设置为rwx group设置为r x,给其它用户也是设置为r x.
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$  <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> ./*  //给这个路径下的所有文件机及目录设置为 rwx rx rx权限。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ln命令" tabindex="-1"><a class="header-anchor" href="#ln命令" aria-hidden="true">#</a> ln命令</h2><blockquote><p>创建链接文件命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$  <span class="token function">ln</span> <span class="token parameter variable">-s</span> file1.txt  doc.txt  //给file1.txt创建一个软链接名为doc.txt
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$  <span class="token function">ln</span> file1.txt  doc.txt  //给file1.txt创建一个硬链接名为doc.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tar命令" tabindex="-1"><a class="header-anchor" href="#tar命令" aria-hidden="true">#</a> tar命令</h2><blockquote><p>对文件进行压缩与解压缩操作。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">tar</span> <span class="token parameter variable">-czf</span> file.tar.gz file/   	//压缩 file/文件夹为gz格式，压缩包名称为 file.tar.gz
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">tar</span> <span class="token parameter variable">-xzf</span> file.tar.gz 	 		//解压缩 file.tar.gz压缩包
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">tar</span> <span class="token parameter variable">-cjf</span> file.tar.bz  file/ 	//压缩 file/文件夹为bz格式，压缩包名称为 file.tar.bz
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">tar</span> <span class="token parameter variable">-xjf</span> file.tar.gz 			//解压缩file.tar.gz压缩包.
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">tar</span> czf - file/ <span class="token operator">|</span> <span class="token function">split</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-b100m</span> - file.tar.gz //将file文件夹进行分割，以100M大小进行分割操作，生产的压缩包格式为 file.tar.gz
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">cat</span> file.tar.gz0* <span class="token operator">|</span> <span class="token function">tar</span> zx   //将分卷压缩的压缩包进行统一解压缩操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7z命令" tabindex="-1"><a class="header-anchor" href="#_7z命令" aria-hidden="true">#</a> 7z命令</h2><blockquote><p>以.7z结尾的压缩包进行解压缩或者压缩操作。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> p7zip-full  //安装7z压缩解压缩工具
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ 7z a <span class="token parameter variable">-t7z</span> <span class="token parameter variable">-r</span> test1.7z  dir1/  //压缩dir1目录为test1.7z压缩包。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ 7z x  test1.7z <span class="token parameter variable">-r</span> -odir2/		//解压缩名为 test1.7z，递归解压输出到dir2目录内。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zip命令" tabindex="-1"><a class="header-anchor" href="#zip命令" aria-hidden="true">#</a> zip命令</h2><blockquote><p>以.zip结尾的压缩包，压缩与解压缩。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">zip</span> <span class="token parameter variable">-r</span> test1.zip dir1 file1 	//将dir1 file1压缩为 test1.zip压缩包。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">unzip</span> <span class="token parameter variable">-v</span> test1.zip 	//查看压缩包test1.zip里面的内容
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">unzip</span> <span class="token parameter variable">-t</span> test1.zip		//查看一下test1.zip压缩包完整性
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">unzip</span> <span class="token parameter variable">-d</span> tmp  test1.zip //解压缩test1.zip到 tmp目录下。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">zip</span>  test1.zip  <span class="token parameter variable">-d</span> file1	//单独从test1.zip压缩包里删除 file1文件。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">unzip</span> <span class="token parameter variable">-v</span> test1.zip //查看压缩包test1.zip里面的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gzip命令" tabindex="-1"><a class="header-anchor" href="#gzip命令" aria-hidden="true">#</a> gzip命令</h2><blockquote><p>压缩.gz结尾的压缩包。他只能压缩单个文件。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">gzip</span> test1.iso  //压缩一个名为test1.iso为gz压缩格式。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ gunzip test1.iso.gz //解压缩test1.iso.gz压缩包。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bzip2命令" tabindex="-1"><a class="header-anchor" href="#bzip2命令" aria-hidden="true">#</a> bzip2命令</h2><blockquote><p>压缩为.bz2的压缩包以及解压缩。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">bzip2</span> file.txt  		//压缩一个file.txt,压缩后名称为file.txt.bz2 
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ bunzip2 file.txt.bz2   //解压缩file.txt.bz2 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,60),l=[i];function c(p,o){return n(),s("div",null,l)}const d=a(t,[["render",c],["__file","Filemanagement.html.vue"]]);export{d as default};
