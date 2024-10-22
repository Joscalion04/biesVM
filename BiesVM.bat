@echo off
setlocal enabledelayedexpansion

if "%1"=="-o" (
    REM Verificar si el segundo argumento es el nombre del archivo
    if "%2"=="" (
        echo Error: No se ha proporcionado el nombre del archivo.
        exit /b 1
    )

    REM Establecer el nombre del archivo correctamente
    set FILE=%2

    REM Verificar el valor de FILE
    echo Archivo leido: !FILE!

    REM Comprobar si el archivo .basm existe en la carpeta de tests
    if exist ".\test\!FILE!" (
        echo Ejecutando archivo: .\test\!FILE!

        REM Ejecutar el script de Node.js y redirigir la salida a un archivo temporal
        node .\index.js ".\test\!FILE!" > output.txt

        REM Verificar si la salida fue capturada correctamente
        if exist output.txt (
            type output.txt
        ) else (
            echo Error: No se pudo generar la salida de node.
            exit /b 1
        )

        REM Verificar el código de salida de Node.js
        if errorlevel 1 (
            echo Error: La ejecucion del archivo ha fallado.
            del /f output.txt
            exit /b 1
        ) else (
            echo Ejecucion completada con exito.
            del /f output.txt
        )
        
    ) else (
        echo Error: El archivo ".\test\!FILE!" no existe en la carpeta de pruebas.
        exit /b 1
    )
) else (
    echo Uso: BiesVM.bat -o ^<archivo.basm^>
    exit /b 1
)

endlocal