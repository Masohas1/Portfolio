<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1f029f6f25ca752e842642d3977c211b
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1f029f6f25ca752e842642d3977c211b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1f029f6f25ca752e842642d3977c211b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1f029f6f25ca752e842642d3977c211b::$classMap;

        }, null, ClassLoader::class);
    }
}