=== Picturefill.WP ===
Contributors: kylereicks
Donate link: http://shakopee.dollarsforscholars.org/
Tags: retina, responsive images, picturefill
Requires at least: 3.0
Tested up to: 3.5.1
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A Wordpress plugin to use picturefill.js to load images mimicking the proposed HTML5 picture spec.

== Description ==

This plugin uses and adapted version of [picturefill.js](https://github.com/scottjehl/picturefill) that uses `span` instead of `div` and adds additional attributes such as `id`, `class`, and `title`.

##Details

Picturefill.wp looks through `the_content` to find `<img>` elements like this:

    <img class="alignnone size-large wp-image-123" alt="Accessible alternate text for the image" title="A title that displays on hover" src="http://sitename.com/wp-content/uploads/2013/4/image-770x577" width="770" height="577" />

then replaces them with something like this:

    <span data-picture data-class="alignnone size-large wp-image-123" dat-alt="Accessible alternate text for the image" data-title="A title that displays on hover" data-width="770" data-height="577">
      <span data-src="http://sitename.com/wp-content/uploads/2013/4/image-770x577"></span>
      <span data-src="http://sitename.com/wp-content/uploads/2013/4/image-150x150" data-width="150" data-height="150" data-media="(min-width: 1px)"></span>
      <span data-src="http://sitename.com/wp-content/uploads/2013/4/image-300x300" data-width="150" data-height="150" data-media="(min-width: 1px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>
      <span data-src="http://sitename.com/wp-content/uploads/2013/4/image-400x300" data-width="400" data-height="300" data-media="(min-width: 420px)"></span>
      <span data-src="http://sitename.com/wp-content/uploads/2013/4/image-800x600" data-width="400" data-height="300" data-media="(min-width: 420px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>
      <span data-src="http://sitename.com/wp-content/uploads/2013/4/image-770x577" data-width="770" data-height="577" data-media="(min-width: 790px)"></span>
      <span data-src="http://sitename.com/wp-content/uploads/2013/4/image-1540x1155" data-width="770" data-height="577" data-media="(min-width: 790px) and (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)"></span>
      <noscript>
        <img class="alignnone size-large wp-image-123" alt="Accessible alternate text for the image" title="A title that displays on hover" src="http://sitename.com/wp-content/uploads/2013/4/image-770x577" width="770" height="577" />
      </noscript>
    </span>

The adapted version of picturefill.js then looks for the last `data-src` listed where the associated `data-media` matches the device and browser, and loads the appropriate image inside the parent `<span>` element.

###Heights and Widths and Breakpoints

One of the goals of this plugin is to be completely "plug and play" i.e. no setup and no options. Just turn it on and it works. To do this, the plugin relies on several Wordpress defaults and conventions.

####Wordpress Image Sizes

By default, Wordpress creates as many as 3 images of different sizes for each uploaded image ("large", "medium", and "thumbnail"), in addition to the "full" image size.

This plugin adds responsive breakpoints based on the with of the image. The largest available image will display unless the browser width is less than the image with + 20px, in which case the next size down is displayed.

To use this plugin most effectively, set the default image sizes ("large", "medium", and "thumbnail") to reflect useful breakpoints in your theme design.

####Wordpress Image Classes

This plugin uses the default Wordpress image classes `size-{size}` and `wp-image-{image id}` as a source of information. It will not work effectively if these classes are removed. The original image will still be loaded, but it will not be responsive.
This is the long description.  No limit, and you can use Markdown (as well as in the following sections).

== Installation ==


1. Upload the plugin folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= Where are the plugin options? =

There aren't any. Breakpoints, as well as retina and responsive images are created based on the image sizes in your media settings.

= Is this plugin on GitHub? =

Yes it is. [Picturefill.WP](https://github.com/kylereicks/picturefill.js.wp)

== Screenshots ==

== Changelog ==

= 1.0 =
* Release 1.0.

== Upgrade Notice ==

= 1.0 =
This is the initial public release.