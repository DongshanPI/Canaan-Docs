import{_ as a,o as t,c as p,e as n}from"./app-93907a86.js";const s={},o=n('<h1 id="_3-训练项目管理" tabindex="-1"><a class="header-anchor" href="#_3-训练项目管理" aria-hidden="true">#</a> 3.训练项目管理</h1><h2 id="_3-1-ai-matrix示例项目" tabindex="-1"><a class="header-anchor" href="#_3-1-ai-matrix示例项目" aria-hidden="true">#</a> 3.1 AI Matrix示例项目</h2><p>打开AI Matrix后，在项目选项卡页面的右侧可以看到最近的项目和示例项目两部分，由于是第一次打开，所以最近的项目一栏为空。AI Matrix为用户提供了三个示例项目分别是图像分类、目标检测及语义分割。</p><p>在最近项目一栏中双击任意一张图片可以进入到该项目中，例如双击veg_cls蔬菜分类项目，就会打开veg_cls项目，同时AI Matrix会自动切换至图像选项卡页面，如图2-1,2-2所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174319366.png" alt="image-20240522174319366"></p><p>图2-1 双击蔬菜分类项目</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174338911.png" alt="image-20240522174338911"></p><p>图2-2 跳转至图像选项卡</p><p>用户可以双击任意的示例项目，进入到示例项目中后，图像、拆分、训练、评估选项卡将被激活，用户可以在不同选项卡中了解AI Matrix各项功能。</p><h2 id="_3-2-ai-matrix最近项目" tabindex="-1"><a class="header-anchor" href="#_3-2-ai-matrix最近项目" aria-hidden="true">#</a> 3.2 AI Matrix最近项目</h2><p>关闭软件后再打开软件，可以看到上方最近项目栏中会刷新出用户最近使用的项目，双击该</p><p>栏中的项目图片可以进入到相应的工程，如图2-3所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174354835.png" alt="image-20240522174354835"></p><p>图2-3 最近的项目</p><p>最近的项目中会保存上次用户关闭后所保存的拆分比例、训练参数等内容。方便用户快速打开最近工作项目内容。最近项目栏中最多支持8个用户最近使用过的项目。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174417944.png" alt="image-20240522174417944"></p><p>图2-4 最多支持8个最近项目</p><h2 id="_3-3-创建项目" tabindex="-1"><a class="header-anchor" href="#_3-3-创建项目" aria-hidden="true">#</a> 3.3 创建项目</h2><p>除了使用最近项目、示例项目入口进入项目工程外，AI Matrix还支持用户自主创建项目，单击新建项目按钮会弹出创建新项目对话框如图2-5所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174505338.png" alt="image-20240522174505338"></p><p>图2-5 创建新项目对话框</p><p>在创建新项目对话框中，AI Matrix支持三种不同的任务类型，分别是图像分类、目标检测和语义分割，如图2-6所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174519123.png" alt="image-20240522174519122"></p><p>图2-6 不同任务类型</p><p>选定不同的任务类型后，下方的数据集插图会相应的切换，指示用户在不同任务类型下导入不同类型的数据集。</p><p>对于图像分类任务，用户需要将分类数据集按照如下方式进行整理，如图2-7所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174529195.png" alt="image-20240522174529195"></p><p>图2-7 图像分类数据集整理格式</p><p>图像分类数据集中的不同类型图片需要放置在以类别命名的文件夹中，如class1、class2等，同时在导入数据集时应当选择dataset root directory，以蔬菜数据集为例。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174541537.png" alt="image-20240522174541537"></p><p>图2-8 图像分类示例数据集</p><p>这里的dataset root directory为蔬菜数据集，用户在导入时要选择该级目录。</p><p>对于目标检测任务，用户需要将目标检测数据集按照如下方式进行整理，如图2-9所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174600965.png" alt="image-20240522174600965"></p><p>图2-9 目标检测数据集整理格式</p><p>AI Matrix的目标检测任务依赖两个文件夹，分别是JPEGImages和Annotations文件夹，其中JPEGImages中存放的是原始图片，Annotations中存放的是与之对应的标注文件。AI Matrix目标检测任务支持三种数据集格式，分别是Annotations json、voc xml和yolo txt，用户在使用时将相应格式的标注文件（Annotations.json/pic.xml/pic.txt）放置在Annotations文件夹中。</p><p>如果是coco标注格式，json文件应当被命名为<strong>Annotations.json</strong>;如果是voc格式数据集，应当被命名为<strong>图像名.xml</strong>;如果是yolo txt，应当被命名文<strong>图像名.txt</strong>，同时由于yolo txt中不含有类别信息，用户需要在JPEGImages、Annotations文件夹的同级目录下提供labels.txt 类别信息文件。</p><p>对于语义分割任务，用户需要将语义分割数据集按照如下方式进行整理，如图2-10所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174615587.png" alt="image-20240522174615587"></p><p>图2-10 语义分割数据集整理格式</p><p>与目标检测任务类似，AI Matrix的语义分割任务依赖两个文件夹，分别是JPEGImages和Annotations，其中JPEGImages中存放的原始图片，Annotations中存放的是标注mask，由于标注mask图片中没有类别信息，因此用户需要提供labels.txt作为标签信息文件。<strong>labels.txt文件需要以background作为开头（与mask中灰度值为0的部分对应）。</strong></p><p>数据集整理完毕后，选择数据集根目录dataset root directory导入数据集，导入后选择项目保存路径，并对项目进行命名。如图2-11所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174625134.png" alt="image-20240522174625134"></p><p>图2-11 创建新项目</p><p>如图2-11选择好任务类型，导入数据集并选择工程路径后即可单击创建新项目按钮从而完成新项目的创建。<strong>AI Matrix****一个项目绑定一份数据集，为一对一关系。</strong></p><h2 id="_3-4-打开本地项目" tabindex="-1"><a class="header-anchor" href="#_3-4-打开本地项目" aria-hidden="true">#</a> 3.4 打开本地项目</h2><p>用户还可以通过打开项目打开本地存在的项目，如图2-12所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174645505.png" alt="image-20240522174645505"></p><p>图2-12 打开本地项目</p><p>弹出路径选择对话框后选择工程文件夹，即可打开本地工程。</p>',50),e=[o];function i(r,c){return t(),p("div",null,e)}const h=a(s,[["render",i],["__file","03-TrainingProjectManagement.html.vue"]]);export{h as default};
