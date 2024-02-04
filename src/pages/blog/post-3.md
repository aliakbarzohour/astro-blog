---
layout: "../../layouts/BlogPostLayout.astro"
title:  "Introducing Alpine Linux!"
date:  Nov 18, 2021
author:  Aliakbar Zohour
image: {
    src: "/images/post-3.jpeg",
    alt: "Arch Linux Package Manager",
}
description:  "If you use Arch Linux or any Arch-based Linux (such as Manjaro and Arco), be sure to tackle the Pacman Manager package."
draft: false
category:  linux

---

If you use Arch Linux or any Arch-based Linux (such as Manjaro and Arco), be sure to tackle the Pacman Manager package. pacman is the manager of the Archbase Linux package, which is actually the same apt or dnf in Ubuntu and Fedora, and in general you can use it to manage your own programs.

One of the things you will encounter when comparing Linux is the package manager section, and of course the package manager of each Linux is different (unless they are from the same family) and you in Arch Linux and Manjaro from pacman to install, remove, Update and … you use.

You’ve probably heard of pacman, but not as a closed manager but as a game! And well, it was the creativity of the Arch team to give this name to their package manager.

Well now you are familiar with pacman package manager and now we will learn how to work with this package manager:

Installing the program
To install programs outside the computer, we use the following command:

```$ sudo pacman -S vim```

Big S means Synchronize.

To install the latest program, you can use the following command:

```$ sudo pacman -Syu vim```

Note:. You can install a program several times and the latest version will be installed for you each time.

Uninstall the program
Use the following command to delete any package in Arch Linux:

```$ sudo pacman -R vim```

Note: You can delete any dependent program by adding the -s switch, such as the following command:

```$ sudo pacman -Rs vim```

Remove unnecessary programs
You can use the following command to identify unnecessary programs:

```$ pacman -Qdtq```

You can use the following command to remove unnecessary programs:

```$ pacman -Qdtq | sudo pacman -Rs```

System upgrade
Use the following command to upgrade the entire system:

```$ sudo pacman -Syu```

Install the program from specified routes
You can download and install a program that you downloaded or it is directly on the web, use the following commands:

To install the system itself:

```$ sudo pacman -U vim-8.2.2891–1-x86_64.pkg.tar.zst```

To install from the web:

```$ sudo pacman -U http://example.com/vim-8.2.2891-1-x86_64.pkg.tar.zst```

# Result
In this article, you will get acquainted with the basics and general things of the pacman package manager, and if you want to learn more deeply, you can search. These are the things we generally need to be able to manage our programs on Linux, I hope you found this article interesting.

Be healthy and healthy. . .