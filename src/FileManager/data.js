const data = {
  "type": "directory",
  "name": "root1",
  "created": "2024-01-01T00:00:00Z",
  "lastModified": "2024-01-12T09:00:00Z",
  "owner": "user123",
  "permissions": {
    "read": true,
    "write": true,
    "execute": false
  },
  "tags": ["root", "main"],
  "contents": [
    {
      "type": "directory",
      "name": "documents",
      "created": "2024-01-10T08:00:00Z",
      "owner": "user123",
      "permissions": {
        "read": true,
        "write": true,
        "execute": false
      },
      "tags": ["work", "important"],
      "contents": [
        {
          "type": "file",
          "name": "contract.pdf",
          "size": 456789,
          "lastModified": "2024-01-12T09:00:00Z",
          "created": "2024-01-10T10:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": false,
            "execute": false
          },
          "tags": ["contract", "pdf", "legal"],
          "mimeType": "application/pdf",
          "version": "1.0",
          "checksum": "def123ghi456jkl789",
          "comments": [
            {
              "user": "user123",
              "text": "Signed contract",
              "timestamp": "2024-01-12T09:00:00Z"
            }
          ],
          "accessControlList": [
            {
              "user": "user456",
              "permissions": {
                "read": true,
                "write": false,
                "execute": false
              }
            }
          ],
          "favorite": true,
          "encryption": {
            "algorithm": "AES-256",
            "key": "encrypted-key-here"
          },
          "versionHistory": [
            {
              "version": "1.0",
              "timestamp": "2024-01-10T10:00:00Z",
              "changes": "Initial version"
            }
          ],
          "sharing": {
            "sharedWith": ["user456", "user789"],
            "permissions": {
              "read": true,
              "write": false,
              "execute": false
            }
          }
        },
        {
          "type": "file",
          "name": "presentation.pptx",
          "size": 234567,
          "lastModified": "2024-01-11T11:30:00Z",
          "created": "2024-01-10T12:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": true,
            "execute": false
          },
          "tags": ["presentation", "pptx", "meeting"],
          "mimeType": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "version": "1.1",
          "checksum": "mno123pqr456stu789",
          "comments": [
            {
              "user": "user123",
              "text": "Updated slides",
              "timestamp": "2024-01-11T11:30:00Z"
            }
          ],
          "accessControlList": [
            {
              "user": "user789",
              "permissions": {
                "read": true,
                "write": true,
                "execute": false
              }
            }
          ],
          "favorite": false,
          "encryption": {
            "algorithm": "AES-256",
            "key": "encrypted-key-here"
          },
          "versionHistory": [
            {
              "version": "1.0",
              "timestamp": "2024-01-10T12:00:00Z",
              "changes": "Initial version"
            },
            {
              "version": "1.1",
              "timestamp": "2024-01-11T11:30:00Z",
              "changes": "Updated slides"
            }
          ],
          "sharing": {
            "sharedWith": ["user789"],
            "permissions": {
              "read": true,
              "write": true,
              "execute": false
            }
          }
        },
        {
          "type": "file",
          "name": "report.xlsx",
          "size": 345678,
          "lastModified": "2024-01-15T14:00:00Z",
          "created": "2024-01-10T15:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": true,
            "execute": false
          },
          "tags": ["report", "xlsx", "analysis"],
          "mimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "version": "1.0",
          "checksum": "stu123vwx456yzab789",
          "comments": [
            {
              "user": "user123",
              "text": "Quarterly report",
              "timestamp": "2024-01-15T14:00:00Z"
            }
          ],
          "accessControlList": [
            {
              "user": "user456",
              "permissions": {
                "read": true,
                "write": true,
                "execute": false
              }
            }
          ],
          "favorite": true,
          "encryption": {
            "algorithm": "AES-256",
            "key": "encrypted-key-here"
          },
          "versionHistory": [
            {
              "version": "1.0",
              "timestamp": "2024-01-10T15:00:00Z",
              "changes": "Initial version"
            }
          ],
          "sharing": {
            "sharedWith": ["user456"],
            "permissions": {
              "read": true,
              "write": true,
              "execute": false
            }
          }
        }
      ]
    },
    {
      "type": "directory",
      "name": "media",
      "created": "2024-02-01T08:00:00Z",
      "owner": "user123",
      "permissions": {
        "read": true,
        "write": true,
        "execute": false
      },
      "tags": ["multimedia", "videos", "music"],
      "contents": [
        {
          "type": "file",
          "name": "presentation_video.mp4",
          "size": 12345678,
          "lastModified": "2024-02-05T16:00:00Z",
          "created": "2024-02-01T10:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": true,
            "execute": false
          },
          "tags": ["presentation", "video", "mp4"],
          "mimeType": "video/mp4",
          "version": "1.0",
          "checksum": "efg123hij456klm789",
          "comments": [
            {
              "user": "user123",
              "text": "Final presentation recording",
              "timestamp": "2024-02-05T16:00:00Z"
            }
          ],
          "accessControlList": [
            {
              "user": "user456",
              "permissions": {
                "read": true,
                "write": false,
                "execute": false
              }
            }
          ],
          "favorite": true,
          "encryption": {
            "algorithm": "AES-256",
            "key": "encrypted-key-here"
          },
          "versionHistory": [
            {
              "version": "1.0",
              "timestamp": "2024-02-01T10:00:00Z",
              "changes": "Initial recording"
            }
          ],
          "sharing": {
            "sharedWith": [],
            "permissions": {
              "read": true,
              "write": true,
              "execute": false
            }
          }
        },
        {
          "type": "file",
          "name": "music_track.mp3",
          "size": 3456789,
          "lastModified": "2024-02-03T13:30:00Z",
          "created": "20244-02-01T11:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": true,
            "execute": false
          },
          "tags": ["music", "mp3", "audio"],
          "mimeType": "audio/mpeg",
          "version": "1.0",
          "checksum": "nop123qrs456tuv789",
          "comments": [
            {
              "user": "user123",
              "text": "Favorite track",
              "timestamp": "2024-02-03T13:30:00Z"
            }
          ],
          "accessControlList": [
            {
              "user": "user789",
              "permissions": {
                "read": true,
                "write": true,
                "execute": false
              }
            }
          ],
          "favorite": true,
          "encryption": {
            "algorithm": "AES-256",
            "key": "encrypted-key-here"
          },
          "versionHistory": [
            {
              "version": "1.0",
              "timestamp": "2024-02-01T11:00:00Z",
              "changes": "Initial track"
            }
          ],
          "sharing": {
            "sharedWith": ["user789"],
            "permissions": {
              "read": true,
              "write": true,
              "execute": false
            }
          }
        }
      ]
    },
    {
      "type": "directory",
      "name": "software",
      "created": "2024-03-01T08:00:00Z",
      "owner": "user123",
      "permissions": {
        "read": true,
        "write": true,
        "execute": false
      },
      "tags": ["applications", "tools"],
      "contents": [
        {
          "type": "file",
          "name": "software_app.exe",
          "size": 5678901,
          "lastModified": "2024-03-05T15:00:00Z",
          "created": "2024-03-01T10:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": true,
            "execute": true
          },
          "tags": ["software", "exe", "application"],
          "mimeType": "application/octet-stream",
          "version": "1.0",
          "checksum": "xyz123abc456def789",
          "comments": [
            {
              "user": "user123",
              "text": "Latest version",
              "timestamp": "2024-03-05T15:00:00Z"
            }
          ],
          "accessControlList": [
            {
              "user": "user456",
              "permissions": {
                "read": true,
                "write": false,
                "execute": false
              }
            },
            {
              "user": "user789",
              "permissions": {
                "read": true,
                "write": true,
                "execute": true
              }
            }
          ],
          "favorite": false,
          "encryption": {
            "algorithm": "AES-256",
            "key": "encrypted-key-here"
          },
          "versionHistory": [
            {
              "version": "1.0",
              "timestamp": "2024-03-01T10:00:00Z",
              "changes": "Initial release"
            }
          ],
          "sharing": {
            "sharedWith": ["user789"],
            "permissions": {
              "read": true,
              "write": true,
              "execute": true
            }
          }
        }
      ]
    },
    {
      "type": "directory",
      "name": "code",
      "created": "2024-04-01T08:00:00Z",
      "owner": "user123",
      "permissions": {
        "read": true,
        "write": true,
        "execute": false
      },
      "tags": ["coding", "scripts"],
      "contents": [
        {
          "type": "file",
          "name": "script.py",
          "size": 12345,
          "lastModified": "2024-04-05T10:00:00Z",
          "created": "2024-04-01T10:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": true,
            "execute": false
          },
          "tags": ["python", "script", "code"],
          "mimeType": "text/x-python",
          "version": "1.0",
          "checksum": "ghi123jkl456mno789",
          "comments": [
            {
              "user": "user123",
              "text": "Initial script",
              "timestamp": "2024-04-01T10:00:00Z"
            }
          ],
          "accessControlList": [
            {
              "user": "user456",
              "permissions": {
                "read": true,
                "write": false,
                "execute": false
              }
            },
            {
              "user": "user789",
              "permissions": {
                "read": true,
                "write": true,
                "execute": false
              }
            }
          ],
          "favorite": true,
          "encryption": {
            "algorithm": "AES-256",
            "key": "encrypted-key-here"
          },
          "versionHistory": [
            {
              "version": "1.0",
              "timestamp": "2024-04-01T10:00:00Z",
              "changes": "Initial script"
            }
          ],
          "sharing": {
            "sharedWith": ["user789"],
            "permissions": {
              "read": true,
              "write": true,
              "execute": false
            }
          }
        }
      ]
    },
    {
      "type": "directory",
      "name": "presentations",
      "created": "2024-05-01T08:00:00Z",
      "owner": "user123",
      "permissions": {
        "read": true,
        "write": true,
        "execute": false
      },
      "tags": ["slides", "keynote"],
      "contents": [
        {
          "type": "file",
          "name": "keynote_presentation.key",
          "size": 4567890,
          "lastModified": "2024-05-05T09:00:00Z",
          "created": "2024-05-01T10:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": true,
            "execute": false
          },
          "tags": ["keynote", "presentation", "slides"],
          "mimeType": "application/x-iwork-keynote-sffkey",
          "version": "1.0",
          "checksum": "pqr123stu456vwx789",
          "comments": [
            {
              "user": "user123",
              "text": "Conference slides",
              "timestamp": "2024-05-05T09:00:00Z"
            }
          ],
          "accessControlList": [
            {
              "user": "user456",
              "permissions": {
                "read": true,
                "write": false,
                "execute": false
              }
            }
          ],
          "favorite": true,
          "encryption": {
            "algorithm": "AES-256",
            "key": "encrypted-key-here"
          },
          "versionHistory": [
            {
              "version": "1.0",
              "timestamp": "2024-05-01T10:00:00Z",
              "changes": "Initial version"
            }
          ],
          "sharing": {
            "sharedWith": [],
            "permissions": {
              "read": true,
              "write": true,
              "execute": false
            }
          }
        }
      ]
    },
    {
      "type": "directory",
      "name": "personal",
      "created": "2024-06-01T08:00:00Z",
      "owner": "user123",
      "permissions": {
        "read": true,
        "write": true,
        "execute": false
      },
      "tags": ["personal", "memories"],
      "contents": [
        {
          "type": "directory",
          "name": "photos",
          "created": "2024-06-02T08:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": true,
            "execute": false
          },
          "tags": ["memories", "family"],
          "contents": [
            {
              "type": "file",
              "name": "family_photo.jpg",
              "size": 56789,
              "lastModified": "2024-06-02T08:00:00Z",
              "created": "2024-06-02T08:00:00Z",
              "owner": "user123",
              "permissions": {
                "read": true,
                "write": true,
                "execute": false
              },
              "tags": ["family", "memories", "photo"],
              "mimeType": "image/jpeg",
              "version": "1.0",
              "checksum": "xyz789abc123def456",
              "comments": [
                {
                  "user": "user123",
                  "text": "Family gathering",
                  "timestamp": "2024-06-02T08:00:00Z"
                }
              ],
              "accessControlList": [
                {
                  "user": "user456",
                  "permissions": {
                    "read": true,
                    "write": false,
                    "execute": false
                  }
                }
              ],
              "favorite": true,
              "encryption": {
                "algorithm": "AES-256",
                "key": "encrypted-key-here"
              },
              "versionHistory": [
                {
                  "version": "1.0",
                  "timestamp": "2024-06-02T08:00:00Z",
                  "changes": "Initial version"
                }
              ],
              "sharing": {
                "sharedWith": [],
                "permissions": {
                  "read": true,
                  "write": true,
                  "execute": false
                }
              }
            }
          ]
        },
        {
          "type": "directory",
          "name": "diary",
          "created": "2024-06-03T08:00:00Z",
          "owner": "user123",
          "permissions": {
            "read": true,
            "write": true,
            "execute": false
          },
          "tags": ["personal", "thoughts"],
          "contents": [
            {
              "type": "file",
              "name": "thoughts.txt",
              "size": 1234,
              "lastModified": "2024-06-03T08:00:00Z",
              "created": "2024-06-03T08:00:00Z",
              "owner": "user123",
              "permissions": {
                "read": true,
                "write": true,
                "execute": false
              },
              "tags": ["personal", "thoughts", "text"],
              "mimeType": "text/plain",
              "version": "1.0",
              "checksum": "abc789def123ghi456",
              "comments": [
                {
                  "user": "user123",
                  "text": "Random thoughts",
                  "timestamp": "2024-06-03T08:00:00Z"
                }
              ],
              "accessControlList": [],
              "favorite": false,
              "encryption": {
                "algorithm": "AES-256",
                "key": "encrypted-key-here"
              },
              "versionHistory": [
                {
                  "version": "1.0",
                  "timestamp": "2024-06-03T08:00:00Z",
                  "changes": "Initial version"
                }
              ],
              "sharing": {
                "sharedWith": [],
                "permissions": {
                  "read": true,
                  "write": true,
                  "execute": false
                }
              }
            }
          ]
        }
      ]
    }
  ]
};

export default data;
