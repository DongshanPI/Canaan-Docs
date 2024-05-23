import{_ as a,o as i,c as n,e}from"./app-93907a86.js";const s={},d=e(`<h1 id="isp调参优化工具" tabindex="-1"><a class="header-anchor" href="#isp调参优化工具" aria-hidden="true">#</a> ISP调参优化工具</h1><h2 id="_1-isp调优工具框架介绍" tabindex="-1"><a class="header-anchor" href="#_1-isp调优工具框架介绍" aria-hidden="true">#</a> 1.ISP调优工具框架介绍</h2><p>本节介绍ISP调优工具和数据流的说明，这些框架和数据流是为上层处理器提供的，用于控制整个ISP图像优化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------------------------------------------------+
|                                                    |
|                      K510                          |
|                                                    |
|    +-------+        +--------------------------+   |
|    |       |        |                          |   |
|    |  ISP  +------&gt; |        v4l2_drm.out      |   |
|    |       |        |                          |   |
|    +-------+        +-------------+------------+   |
|                                   |                |
|                                   |                |
|    +-----------------+            |                |
|    |                 |            |                |
|    |   isp-tuningd   | &lt;----------+                |
|    |                 |                             |
|    +^-+--------------+                             |
|     | |                                            |
|     | |                                            |
+----------------------------------------------------+
      | |
      | |
+-------------------------------+
|     | |                       |
|     | |       PC              |
|     | |                       |
|    ++-v------------------+    |
|    |                     |    |
|    |  ISP Tuning Tool    |    |
|    |                     |    |
|    +---------------------+    |
|                               |
+-------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-调优工具数据流" tabindex="-1"><a class="header-anchor" href="#_2-调优工具数据流" aria-hidden="true">#</a> 2.调优工具数据流</h2><p>通信协议参见客户端代码仓库里的说明文档，工具包含两部分，一部分是在PC上运行的客户端isp-tuningd，程序位于/app/mediactl_lib/isp-tuningd，另一部分是在K510上运行的服务端。通信默认使用TCP的9982端口。</p><h3 id="_3-客户端" tabindex="-1"><a class="header-anchor" href="#_3-客户端" aria-hidden="true">#</a> 3.客户端</h3><p>ISP Tuning Tool是在PC上运行的应用程序。除了能设置寄存器外还支持进行AWB校准和CCM校准。</p><h3 id="_4-服务端" tabindex="-1"><a class="header-anchor" href="#_4-服务端" aria-hidden="true">#</a> 4.服务端</h3><p>isp-tuningd会从标准输入接收yuv图像（NV12）并广播给所有客户端，我们可以使用v4l2_drm.out，他会自动启动isp-tuningd并送入图像数据。我们可以用如下命令运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /app/mediactl_lib
<span class="token comment"># 使用camera 0</span>
./images/v4l2_drm.out <span class="token parameter variable">-t</span> <span class="token number">1</span> <span class="token parameter variable">-f</span> video_drm_1080x1920.conf

<span class="token comment"># 使用camera 1</span>
./images/v4l2_drm.out <span class="token parameter variable">-t</span> <span class="token number">1</span> <span class="token parameter variable">-f</span> video_drm_1080x1920_r2k.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不需要使用预览，则直接启动isp-tuningd即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/app/mediactl_lib/isp-tuningd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-isp调优选项" tabindex="-1"><a class="header-anchor" href="#_3-isp调优选项" aria-hidden="true">#</a> 3.ISP调优选项</h2><p>K510 ISP中提供了许多寄存器和表以进行控制和调优。ISP硬件寄存器的设置对图像质量非常重要。目前K510平台，图像调优过程只通过TCP Socket实现。</p><h2 id="_4-调优工具主窗口" tabindex="-1"><a class="header-anchor" href="#_4-调优工具主窗口" aria-hidden="true">#</a> 4.调优工具主窗口</h2><p>本节介绍调优窗口上这些面板的功能。</p><p>图3-1显示了调优窗口上的整个操作面板</p><ul><li>面板1是<strong>菜单</strong>，它可以选择加载配置好的ISP文件或进行校准。</li><li>面板2是<strong>连接控制面板</strong>，填入开发板的IP地址和端口号（默认9982端口）后点击绿色的连接按钮即可连接。</li><li>面板3是<strong>寄存器面板</strong>，如果你需要设置或读取的寄存器并不在这里面则可以使用这个面板进行设置和读取。</li><li>面板4是<strong>ISP选择面板</strong>，可以指定ISP F2K或ISP R2K。</li><li>面板5是调优<strong>参数选择面板</strong>，用户可以根据面板提示文本选择各种参数或参数组，这些选择的寄存器将显示在面板5上。</li><li>面板6是<strong>调优参数设置面板</strong>，它用于设置或从调优服务器获取参数值。</li></ul><p><img src="http://photos.100ask.net/canaan-docs/clip_image033.png" alt="图3-1 调优工具主窗口"></p><p>ISP Tuning Tool在连接后<strong>不会</strong>自动获取所有寄存器值，如果需要获取所有的寄存器值可以点击<strong>连接控制面板</strong>右侧的读取按钮，即可拉取当前的所有寄存器值。</p><h2 id="标定-校准" tabindex="-1"><a class="header-anchor" href="#标定-校准" aria-hidden="true">#</a> 标定 &amp; 校准</h2><p>本节介绍使用ISP调优工具进行标定和校准的说明，包括自动白平衡（AWB）、颜色校正矩阵（CCM）、Gamma和镜头阴影（LSC）。</p><h3 id="awb" tabindex="-1"><a class="header-anchor" href="#awb" aria-hidden="true">#</a> AWB</h3><h4 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h4><ol><li>标准灯箱，有标准D65光源</li><li>标准24色卡，目前仅支持X-RITE色卡</li><li>准备标定的相机，能输出sensor原始图像或处理后的图像</li><li>ISP也仅打开黑电平矫正与去马赛克算法模块，CSC等格式转换模块一定要注意对称性（矩阵是逆矩阵），另外降噪、锐化等模块影响不大，不过也尽量关闭，非线性模块与颜色处理模块（GAMMA，宽动态，AWB，CCM，饱和度调整等）必须关闭</li></ol><h4 id="获取图像" tabindex="-1"><a class="header-anchor" href="#获取图像" aria-hidden="true">#</a> 获取图像</h4><ol><li><p>相机对准24色卡，确保24色卡撑满整个画面，然后抓取图像，未保证准确可以点击暂停播放，如下图所示</p><p><img src="http://photos.100ask.net/canaan-docs/clip_image014.jpg" alt="图4-1 拍摄24色卡"></p></li><li><p>抓取的图像注意亮暗适中，太亮太暗都影响标定</p></li></ol><h4 id="标定" tabindex="-1"><a class="header-anchor" href="#标定" aria-hidden="true">#</a> 标定</h4><p>点击菜单栏的“Calibration”，选择“AWB”即可执行标定，程序会自动框选色卡</p><p><img src="http://photos.100ask.net/canaan-docs/clip_image016.jpg" alt="图4-2 自动框选色卡"></p><p>此时按下任意键继续，弹出完成白平衡后的图像</p><p><img src="http://photos.100ask.net/canaan-docs/clip_image018.jpg" alt="图4-3 完成AWB标定"></p><p>如果没问题，则继续按下任意键，工具会弹出对话框询问参数是否合理，是则会将其填入主界面相关寄存器，否则放弃标定结果，如果是则工具会继续询问是否写入设备寄存器。</p><h3 id="ccm" tabindex="-1"><a class="header-anchor" href="#ccm" aria-hidden="true">#</a> CCM</h3><p>与AWB标定一致，不再赘述。</p><h3 id="gamma" tabindex="-1"><a class="header-anchor" href="#gamma" aria-hidden="true">#</a> Gamma</h3><p>标准的gamma曲线的公式为 $$ Y=aX^b $$ 其中$b$即为Gamma系数，在成像端一般小于1，在显示端一般大于1。$a$的值可以根据$b$的值算出来</p><p>$$ a=\\frac{256}{256^b} $$ 该公式的原理是输入是256，做完Gamma矫正后仍为256。</p><p>Gamma系数b为0.5时，曲线如下图所示</p><p><img src="http://photos.100ask.net/canaan-docs/clip_image025.png" alt=""></p><h3 id="lsc" tabindex="-1"><a class="header-anchor" href="#lsc" aria-hidden="true">#</a> LSC</h3><h4 id="准备工作-1" tabindex="-1"><a class="header-anchor" href="#准备工作-1" aria-hidden="true">#</a> 准备工作</h4><ul><li>一张镜头拍摄获得的RAW格式照片</li></ul><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h4><p>因镜头的中心与四周通光量不一致，造成图像亮度不均匀，因此通过曲线拟合生成一个矫正曲面来弥补该问题。</p><p>矫正前如下图所示</p><p><img src="http://photos.100ask.net/canaan-docs/clip_image029.png" alt="校正前"></p><p>矫正后如下图所示</p><p><img src="http://photos.100ask.net/canaan-docs/clip_image031.png" alt="校正后"></p>`,50),l=[d];function r(c,t){return i(),n("div",null,l)}const h=a(s,[["render",r],["__file","05-ISP_Tuning_Tool_Guides.html.vue"]]);export{h as default};
