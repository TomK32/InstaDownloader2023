/****************************************************************************************
 * Copyright (c) 2021. HuiiBuh                                                          *
 * This file (QuerySelectors.ts) is part of InstagramDownloader which is released under *
 * GNU LESSER GENERAL PUBLIC LICENSE.                                                   *
 * You are not allowed to use this code or this file for another project without        *
 * linking to the original source AND open sourcing your code.                          *
 ****************************************************************************************/

/**
 * A bunch of css selectors which get used by instagram
 */

export enum QuerySelectors {
    // Post
    postWrapper = 'article',
    postBookmark = '._aamz',
    postLink = '._a6hd',
    postSliderIndicator = '._aamj',
    postSliderActive = '._acnb._acnf',

    // Story
    storyImage = '.y-yJ5',
    storyCloseButton = '.K_10X, ._g3zU, .aUIsh',

    // Account, Hover, Explore, Reels
    imagePreview = '._bz0w, .pKKVh, .Tjpra > a',
    accountName = '._aaqt',
    topRightIconRow = '._47KiJ, .r9-Os, .J5g42',

    // Account Image
    accountImageWrapper = '._aamz',

    // Bulk download
    loadingButton = '.By4nA',
    stopDownload = '._0mzm-.sqdOP.yWX7d',
}
