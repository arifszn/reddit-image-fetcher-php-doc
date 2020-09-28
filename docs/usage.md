---
id: usage
title: Usage
---

Available function:

- fetch()

## Usage

Import the library

```php 
use arifszn\RedditImageFetcher\RedditImageFetcher;
```
Then

```php 
$redditImageFetcher = new RedditImageFetcher();
$redditImageFetcher->fetch('meme'); //returns 1 meme
$redditImageFetcher->fetch('wallpaper'); //returns 1 wallpaper
```

Using options:

```php 
$redditImageFetcher->fetch('wallpaper', 50); //returns 50 wallpapers 
 
$redditImageFetcher->fetch(
    'meme',
    50,
    [],
    ['memes', 'funny'],
    ['dankmemes']
); //returns 50 memes by adding two and removing 1 subreddits
```

It can be used other than fetching memes and wallpapers.
<p>Custom image fetch from given subreddits:</p>

```php 
$redditImageFetcher->fetch(
    'other',
    50, 
    ['cats', 'Catswhoyell', 'sleepingcats']
); //returns 50 cat images
```

## Result

The function returns array.

import Result from '../src/components/Demo/Result';
import ResultCode from '../src/components/Demo/ResultCode';

<Result data={ResultCode}/>

## Options

<div className="z-table-wrapper">
   <table>
      <thead>
         <tr>
            <th align="left">Property</th>
            <th align="center">Type</th>
            <th align="left">Description</th>
            <th align="center">Default</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td align="left">type</td>
            <td align="center">string</td>
            <td align="left">meme, wallpaper or custom image to fetch</td>
            <td align="center">'meme'</td>
         </tr>
         <tr>
            <td align="left">total</td>
            <td align="center">int</td>
            <td align="left">How many images to get. Max is 50</td>
            <td align="center">1</td>
         </tr>
         <tr>
            <td align="left">subreddit</td>
            <td align="center">array</td>
            <td align="left">Custom subreddit libray</td>
            <td align="center">[ ]</td>
         </tr>
         <tr>
            <td align="left">addSubreddit</td>
            <td align="center">array</td>
            <td align="left">Add subreddits to subreddit library</td>
            <td align="center">[ ]</td>
         </tr>
         <tr>
            <td align="left">removeSubreddit</td>
            <td align="center">array</td>
            <td align="left">Remove subreddits from subreddit library</td>
            <td align="center">[ ]</td>
         </tr>
      </tbody>
   </table>
</div>
