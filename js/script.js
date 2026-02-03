        window.onload = function() {
            window.ui = SwaggerUIBundle({
                url: "./document.yaml",
                dom_id: '#swagger-ui',
                deepLinking: true,
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIBundle.presets.debug
                ],
                plugins: [
                    SwaggerUIBundle.plugins.DownloadUrl
                ]
            });
        };