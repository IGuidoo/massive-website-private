---
title: Understanding caching
nextjs:
  metadata:
    title: Understanding caching
    description: Quidem magni aut exercitationem maxime rerum eos.
---

Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.

---

# Implementing hreflang Language Tags Correctly on a Website

In today's interconnected world, reaching a global audience has become increasingly important for businesses. If you have a website that caters to users in different countries or regions, it's crucial to inform search engines like Google about the localized versions of your pages. This will help Google direct users to the most appropriate version of your page based on their language or region. One effective way to achieve this is by implementing hreflang language tags correctly on your website.

## Why Are hreflang Language Tags Important?

Hreflang language tags serve as a communication tool between website owners and search engines. By correctly implementing these tags, you can ensure that search engines understand the different language or region variations of your web pages. This, in turn, helps search engines provide the most relevant search results to users in their preferred language or region. 

Without hreflang language tags, search engines may still discover alternate language versions of your pages, but explicitly indicating your language- or region-specific pages is generally considered best practice.

## How to Implement hreflang Language Tags

There are three main methods you can use to indicate the language or region variations of your web pages: HTML, HTTP Headers, and Sitemaps. Each method is equivalent from Google's perspective, so you can choose the one that suits your site's needs and requirements. However, using all three methods simultaneously may be unnecessary and could make it more challenging to manage.

### HTML Method

One way to implement hreflang language tags is by adding `<link rel="alternate" hreflang="lang_code" href="url_of_page" />` elements to the `<head>` section of your web page. These elements inform Google about the language or region variations of your page. 

For example, let's say you have a website serving users in the USA, Great Britain, and Germany. You have the following URLs with regional variations:

- `https://en.example.com/page.html` (Generic English language home page for international shipping from the USA)
- `https://en-gb.example.com/page.html` (UK home page with prices in pounds sterling)
- `https://en-us.example.com/page.html` (US home page with prices in US dollars)
- `https://de.example.com/page.html` (German language home page)

To implement hreflang language tags using the HTML method, you would add the following code to the `<head>` section of each page:

```html
<link rel="alternate" hreflang="en-us" href="https://en-us.example.com/page.html" />
<link rel="alternate" hreflang="en-gb" href="https://en-gb.example.com/page.html" />
<link rel="alternate" hreflang="en" href="https://en.example.com/page.html" />
<link rel="alternate" hreflang="de" href="https://de.example.com/page.html" />
```

By including these tags, you're indicating to search engines that these pages are localized variations of the same content.

{INFO BOX: Best Practice}
When implementing hreflang language tags using the HTML method, remember to include a set of `<link>` elements for each version of the page, including itself. Each language version should list itself as well as all other language versions. Additionally, ensure that the alternate URLs are fully qualified, including the transport method (http/https).

### HTTP Headers

If you have non-HTML files like PDFs on your website, you can use the HTTP Headers method to indicate the language or region variations of those files. This method involves returning an HTTP header with your page's GET response. 

To implement hreflang language tags using HTTP Headers, you would specify a set of `<url>`, `rel="alternate"`, and `hreflang` values for every version of the page, separated by commas. The Link header returned for each version of the page should be identical.

### Sitemap

Another way to inform search engines about the language or region variations of your pages is by using an XML sitemap. In the sitemap, you would include a `<loc>` element specifying a single URL, with child `<xhtml:link>` entries listing every language/locale variant of the page, including itself. 

For example, if you have three versions of a page, your sitemap would have entries for the URLs of each version, and each entry would have three identical child entries indicating the language or region variations.

{INFO BOX: Best Practice}
When using sitemaps to implement hreflang language tags, remember to specify the xhtml namespace and create a separate `<url>` element for each URL. Each `<url>` element should include a `<loc>` child indicating the page URL, and a child `<xhtml:link>` element with `rel="alternate"` and `hreflang` attributes. It's important to upload the sitemap to a directory on your site that is applicable to the sitemap.

## Best Practices and Common Mistakes

When implementing hreflang language tags, it's essential to follow some best practices to ensure their effectiveness. Here are some guidelines to keep in mind:

- Each language version must list itself as well as all other language versions.
- Alternate URLs should be fully qualified, including the transport method (http/https).
- If you have several alternate URLs targeted at users with the same language but in different locales, consider providing a catchall URL for geographically unspecified users of that language.
- Ensure bidirectional linking between pages to indicate their relationship. If two pages don't both point to each other, the tags may be ignored.
- If maintaining bidirectional links for every language becomes difficult, prioritize linking newly expanded language pages bidirectionally to the originating/dominant language(s).
- Consider adding a fallback page for unmatched languages, especially on language/country selectors or auto-redirecting home pages. Use the `x-default` value to specify the URL where users should land if their language is not supported.

When implementing hreflang language tags, it's also important to avoid common mistakes:

- Make sure to include return links between pages. If page X links to page Y, page Y must link back to page X. Missing return links can lead to incorrect interpretation or ignoring of hreflang annotations.
- Ensure language codes follow the proper format (ISO 639-1 for language and ISO 3166-1 Alpha 2 for region) and don't specify the region alone.
- Debugging hreflang errors can be challenging. There are third-party tools available to help validate and troubleshoot hreflang annotations, but it's important to note that these tools are not maintained or checked by Google.

{INFO BOX: Debugging Tip}
If you encounter issues with hreflang language tags, consider using third-party tools such as Aleyda Solis's hreflang tags generator tool or Merkle SEO hreflang tag testing tool for validation and debugging. These tools can help ensure that your hreflang annotations are implemented correctly.

## Conclusion

Implementing hreflang language tags correctly on your website is essential for reaching and engaging with a global audience. By informing search engines about the language or region variations of your pages, you can increase the likelihood of serving relevant content to users based on their preferences. Whether you choose to use the HTML method, HTTP Headers, or Sitemaps, following best practices and avoiding common mistakes will help ensure the effectiveness of your hreflang implementation.

Remember, hreflang language tags are just one piece of the puzzle when it comes to international SEO. It's important to consider other aspects such as localized content, appropriate targeting, and user experience to fully optimize your website for global audiences.

<div>test</div>

This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.



> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.


> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.




> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");

# {% $markdoc.frontmatter.title %} {% #overview %}

Markdoc is a Markdown-based syntax and toolchain for creating custom documentation sites. Stripe created Markdoc to power [our public docs](http://stripe.com/docs).

{% callout type="warning" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /callout %}

{% <div> hallo </div> %}


## How is Markdoc different?

Markdoc uses a fully declarative approach to composition and flow control, where other solutions… [Read more](/docs/overview).

## Next steps
- [Install Markdoc](/docs/getting-started)
- [Explore the syntax](/docs/syntax)






{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/" description="Step-by-step guides to setting up your system and installing the library." /%}

{% quick-link title="Architecture guide" icon="presets" href="/" description="Learn how the internals work and contribute." /%}

{% quick-link title="Plugins" icon="plugins" href="/" description="Extend the library with third-party plugins or write your own." /%}

{% quick-link title="API reference" icon="theming" href="/" description="Learn to easily customize and modify your app's visual design to fit your brand." /%}

{% /quick-links %}


{% orange-box title="test" text="body" %}