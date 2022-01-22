// Inline Variables
const about_us_title = 'درباره ما'
const about_us = `
meterm یک برنامه متن باز رایگان است که میتواند<br>
در استفاده بهینه تر و با سرعت تر از ترمینال به شما کمک کند.<br>
با می‌ترم میتوانید به ترمینال خود سرعت ببخشید.
`;
const copy_right_text = `
توسعه داده شده توسط مطهر مکفی | MeTerm&copy;
`;
// Start Navbar Data Item list
const navbar_data_title = "بخش های سایت";
const navbar_data_item_list = [
  {
    title: "خانه",
    href: "#",
  },
  {
    title: "قالبلیت ها",
    href: "#features-section",
  },
  {
    title: "PullRequest",
    href: "https://github.com/motahharm/meterm/pulls",
  },
  {
    title: "گزارش",
    href: "https://github.com/motahharm/meterm/issues",
  },
];
// End Navbar Data Item list
// Start Banners
const banners = [
  {
    title: "Meterm ترمینال حرفه ای ها",
    content: `
    <p>
      دستورات لینوکس در ویندوز <br />
      قابلیت ها و شخصی سازی آسان
    </p>
    <a
      class="button-primary"
      href="https://github.com/motahharm/meterm/releases"
    >
      دانلود Meterm
    </a>
    <a href="#git-hub-section" class="button-outline-primary">
      بیشتر دانستن ...
    </a>
    `,
    class: "banner-1",
    id: "",
  },
  {
    title: "پروژه اپن سورس و رایگان",
    content: `
    <p>
      Meterm با هدف راحتتر کردن کار با ترمینال و کامند لاین ساخته شده<br />
      و به صورت اپن سورس و رایگان برای همه منتشر شده است
    </p>
    <a class="button-primary" href="https://github.com/motahharm/meterm">
      GitHub
    </a>
    <a class="button-outline-primary" href="#features-section">
      قابلیت های meterm ؟
    </a>
    `,
    class: "banner-2",
    id: "git-hub-section",
  },
];
// End Banners
// Start Card Data List
const card_data_list = [
  {
    title: "کلید برای پوشه ها",
    image: "assets/img/feature1.png",
    ali_image: "عکس ترمینال meterm",
    content: `
          شما می‌توانید یک کلید با دستور:
          <pre>$ mt-ad YOUR_KEY_NAME YOUR_PATH</pre>
          سپس میتوانید از هرکجا با استفاده از دستور cd به مسیر کلید خود بروید:
          <pre>$ cd YOUR_KEY_NAME</pre>
          `,
    cta: "دانلود meterm",
    cta_href: "https://github.com/motahharm/meterm/releases",
  },
  {
    title: "دستورات لینوکس در ویندوز",
    image: "assets/img/feature2.png",
    ali_image: "دستورات لینوکس در ویندوز meterm",
    content: `
          لیست دستورات لینوکس که با meterm در ویندوز قابل اجرا است:
          <pre>$ clear</pre>
          <pre>$ ls</pre>
          <pre>$ touch</pre>
          `,
    cta: "دانلود برای ویندوز",
    cta_href: "https://github.com/motahharm/meterm/releases",
  },
  {
    title: "فایل exe و آسانی در استفاده",
    image: "assets/img/feature3.png",
    ali_image: "ترمینال برای ویندوز و لینوکس",
    content: `
          میتوانید فایل exe را به path خود اضافه کرده و از آن استفاده کنید<br>
          یا میتوانید در پوشه فایل exe دستور زیر را در cmd یا powershell اجرا نمایید:
          <pre>$ meterm.exe</pre>
          در لینوکس نیز میتوانید فایل meterm را به path خود اضافه نمایید<br>
          یا در پوشه فایل meterm دستور زیر را اجرا نمایید:
          <pre>$ ./meterm</pre>
          `,
    cta: "دانلود meterm",
    cta_href: "https://github.com/motahharm/meterm/releases",
  },
  {
    title: "مشارکت بالا در پروژه",
    image: "assets/img/feature4.jpeg",
    ali_image: "گیت هاب meterm",
    content: `
          با Pull Request دادن به پروژه میتوانید به ما در توسعه پروژه کمک کنید<br>
          و ما نیز خیلی سریع درخواست شما را بررسی میکنیم.
          `,
    cta: "لینک گیتهاب پروژه",
    cta_href: "https://github.com/motahharm/meterm",
  },
  {
    title: "مشکلات خود را با یکدیگر در میان بگذارید",
    image: "assets/img/feature5.jpeg",
    ali_image: "گیت هاب meterm",
    content: `
          در قسمت isuse پروژه در گیت هاب<br>
          مشکلات و ارور های برنامه را به ما اعلام کنید.
          `,
    cta: "قسمت isuse",
    cta_href: "https://github.com/motahharm/meterm/issues",
  },
];
// End Card Data List
// Start footer data item list
const footer_data_item_list = [
  {
    title: "قالبلیت ها",
    href: "#features-section",
  },
  {
    title: "گیت هاب پروژه",
    href: "https://github.com/motahharm/meterm",
  },
  {
    title: "گزارش باگ / مشکل",
    href: "https://github.com/motahharm/meterm/issues",
  },
  {
    title: "تمامی نسخه ها",
    href: "https://github.com/motahharm/meterm/releases",
  },
];
// End footer data item list
